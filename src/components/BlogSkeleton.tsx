export default function BlogSkeleton() {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 max-w-screen-lg cursor-pointer">
        <div className="flex">
          <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="font-extralight pl-2 flex justify-center flex-col text-sm">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
          </div>
          <div className="flex justify-center flex-col pl-2 ">
            <circle />
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
        </div>
        <div className="w-full text-slate-400 text-sm font-thin pt-2">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
