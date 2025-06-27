import BlogCard from "../components/BlogCard";

export const Blogs = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="max-w-xl">
        <BlogCard
          authorName={"Divyanshu Mishra"}
          title={"Lorem ipsum dolor sit amet"}
          content={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus saepe veniam excepturi hic rem! Laborum deleniti, deserunt vero architecto alias, facilis itaque quaerat excepturi quas illum consequuntur illo ea ab."
          }
          publishedDate={"27th of June 2025"}
        />
        <BlogCard
          authorName={"Divyanshu Mishra"}
          title={"Lorem ipsum dolor sit amet"}
          content={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus saepe veniam excepturi hic rem! Laborum deleniti, deserunt vero architecto alias, facilis itaque quaerat excepturi quas illum consequuntur illo ea ab."
          }
          publishedDate={"27th of June 2025"}
        />
        <BlogCard
          authorName={"Divyanshu Mishra"}
          title={"Lorem ipsum dolor sit amet"}
          content={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus saepe veniam excepturi hic rem! Laborum deleniti, deserunt vero architecto alias, facilis itaque quaerat excepturi quas illum consequuntur illo ea ab."
          }
          publishedDate={"27th of June 2025"}
        />
      </div>
    </div>
  );
};
