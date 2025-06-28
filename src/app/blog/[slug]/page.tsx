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


type BlogFrontmatter = {
    title: string;
    author: string;
    description: string;
    date: string;
};

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function Page({ params }: PageProps) {
    const slug = params.slug;
    const filepath = path.join(process.cwd(), "src/blogs", `${slug}.mdx`);

    if (!fs.existsSync(filepath)) {
        notFound();
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
        <div className="max-w-6xl mx-auto p-4 relative">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
                &quot;{description}&quot;
            </p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 italic">By {author}</p>
                <p className="text-sm text-gray-500">{date}</p>
            </div>

            {/* Blog Content */}
            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose dark:prose-invert mt-6"
            ></div>

            <PostContent htmlContent={htmlContent} />
        </div>
    );
}
