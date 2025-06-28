import React from "react";
import { Link } from "react-router-dom";

interface BlogProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export default function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 max-w-screen-lg cursor-pointer">
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
    </Link>
  );
}

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ name, size = "sm" }: AvatarProps) {
  const first = name.split(" ")[0][0]?.toUpperCase() || "";

  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-600 ${sizeClasses[size]}`}
    >
      <span className="font-extralight text-gray-300">{first}</span>
    </div>
  );
}
