import React from "react";

export default function Quote() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold">
            "The customer support I received was exceptional. The support team
            went above and beyond to address my concerns"
          </div>
          <div className="max-w-mid text-2xl font-semibold text-left mt-4">
            John Doe
          </div>
          <div className="max-w-mid text-sm font-light text-slate-400">
            CEO | Ace corp
          </div>
        </div>
      </div>
    </div>
  );
}
