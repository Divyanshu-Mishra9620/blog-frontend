import React from "react";
import Appbar from "./Appbar";
import type { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="flex px-10 w-full max-w-screen-xl pt-12 gap-8">
          <div className="w-2/3">
            <div className="text-5xl font-extrabold">{blog?.title}</div>
            <div className="text-slate-500 pt-2">Posted on XX</div>
            <div className="pt-4">{blog?.content}</div>
          </div>

          <div className="w-1/3">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex flex-col">
              <div className="flex items-center pt-2">
                <div className="pr-4">
                  <Avatar size={"lg"} name={blog?.author.name || "Anonymous"} />
                </div>
                <div className="text-xl font-bold">
                  {blog?.author.name || "Anonymous"}
                </div>
              </div>
              <div className="pt-2 text-slate-500">
                Random catch phrase about the author's ability to grab the
                attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
