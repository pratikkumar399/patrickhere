// import { ArrowRight } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
// } from "@/components/ui/card";

// interface Post {
//     id: string;
//     title: string;
//     summary: string;
//     label: string;
//     author: string;
//     published: string;
//     url: string;
//     image: string;
// }

// interface Blog7Props {
//     tagline: string;
//     heading: string;
//     description: string;
//     buttonText: string;
//     buttonUrl: string;
//     posts: Post[];
// }

// const Blog7 = ({
//     tagline = "Latest Updates",
//     heading = "Blog Posts",
//     description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
//     buttonText = "View all articles",
//     buttonUrl = "https://shadcnblocks.com",
//     posts = [
//         {
//             id: "post-1",
//             title: "Getting Started with shadcn/ui Components",
//             summary:
//                 "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
//             label: "Tutorial",
//             author: "Sarah Chen",
//             published: "1 Jan 2024",
//             url: "https://shadcnblocks.com",
//             image: "/images/block/placeholder-dark-1.svg",
//         },
//         {
//             id: "post-2",
//             title: "Building Accessible Web Applications",
//             summary:
//                 "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
//             label: "Accessibility",
//             author: "Marcus Rodriguez",
//             published: "1 Jan 2024",
//             url: "https://shadcnblocks.com",
//             image: "/images/block/placeholder-dark-1.svg",
//         },
//         {
//             id: "post-3",
//             title: "Modern Design Systems with Tailwind CSS",
//             summary:
//                 "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
//             label: "Design Systems",
//             author: "Emma Thompson",
//             published: "1 Jan 2024",
//             url: "https://shadcnblocks.com",
//             image: "/images/block/placeholder-dark-1.svg",
//         },
//     ],
// }: Blog7Props) => {
//     return (
//         <section className="py-32">
//             <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
//                 <div className="text-center">
//                     <Badge variant="secondary" className="mb-6">
//                         {tagline}
//                     </Badge>
//                     <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
//                         {heading}
//                     </h2>
//                     <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
//                         {description}
//                     </p>
//                     <Button variant="link" className="w-full sm:w-auto" asChild>
//                         <a href={buttonUrl} target="_blank">
//                             {buttonText}
//                             <ArrowRight className="ml-2 size-4" />
//                         </a>
//                     </Button>
//                 </div>
//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
//                     {posts.map((post) => (
                       
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export { Blog7 };
