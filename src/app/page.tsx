"use client"
import BlogsSection from "@/components/generalUi/blogsSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Add top padding to avoid nav overlap */}
      <div className="pt-12 ">
        <div className="flex gap-6 items-center rounded-xl text-white ">

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">pratik </h1>
            <Link href="https://x.com/twtsof_Pratik" target="_blank" className="text-m text-gray-400 hover:text-blue-400 transition-colors mb-2">@twtsof_Pratik</Link>

              <p className="text-gray-400 text-m mb-2 text-justify ">Hi! My name is Pratik and I am currently working in a startup as SDE1.
                I love building and working around my ideas.
                </p>

                <p className="text-gray-400 text-m mb-6 text-justify ">
                Besides that I really love writing technical articles,
                and blogs around my learnings and experiences about life and everything in between.
                I also like to read some fictional novels and watch anime in my free time.
              </p>

          </div>
        </div>
        <BlogsSection />
      </div>
    </div>
  );
}
