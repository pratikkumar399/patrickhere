import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import PostContent from "@/components/PostContent";
import GiscusComments from "@/components/GiscusComments";

type BlogFrontmatter = {
    title: string;
    author: string;
    description: string;
    date: string;
};

// ✅ Correctly type params for App Router
export default async function Page({ params }: { params: any }) {
    const { slug } = await params;
    const filepath = path.join(process.cwd(), "src/blogs", `${slug}.mdx`);

    if (!fs.existsSync(filepath)) {
        notFound(); // triggers 404
    }

    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: data.title || "Blog Post" })
        .use(rehypeFormat)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: "always",
                    feedbackDuration: 3000,
                }),
            ],
        })
        .use(rehypeStringify);

    const htmlContent = (await processor.process(content)).toString();

    const { title, author, description, date } = data as BlogFrontmatter;

    return (
        <section id="blog" className="mt-12">
            <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
                {title}
            </h1>

            <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">By {author}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{date}</p>
            </div>

            <p className="text-neutral-500 dark:text-neutral-400 italic max-w-[650px] mb-6">
                {description}
            </p>

            <article
                className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></article>

            <PostContent htmlContent={htmlContent} />

            <div className="mt-20" >
                <GiscusComments />
            </div>
        </section>

    );
}
