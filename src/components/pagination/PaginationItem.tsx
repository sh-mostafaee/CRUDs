import React from "react";

export type PaginationProps = {
  text: string;
};

export function PaginationItem(props: PaginationProps) {
  const { text } = props;
  return (
    <div className="px-1">
      <div className="flex items-center justify-center border-solid border-2 rounded-full w-[40px] h-[40px]">
        {text}
      </div>
    </div>
  );
}
