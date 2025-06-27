import React from "react";

interface BlogProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export default function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
}: BlogProps) {
  return (
    <div className="p-4 border-b border-slate-200 pb-4">
      <div className="flex">
        <Avatar name={authorName} />
        <div className="font-extralight pl-2 flex justify-center flex-col text-sm">
          {authorName}
        </div>
        <div className="flex justify-center flex-col pl-2 ">
          <Circle />
        </div>
        <div className="pl-2 font-thin text-slate-500 text-sm">
          {publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="w-full text-slate-400 text-sm font-thin pt-2">{`${Math.ceil(
        content.length / 100
      )} minute(s)`}</div>
    </div>
  );
}

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

interface AvatarProps {
  name: string;
}
function Avatar({ name }: AvatarProps) {
  const first = name.split(" ")[0][0]?.toUpperCase() || "";
  const sec = name.split(" ")[1][0]?.toUpperCase() || "";
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full bg-gray-500">
      <span className="text-sm font-extralight text-gray-600 dark:text-gray-300">
        {first}
        {sec}
      </span>
    </div>
  );
}
