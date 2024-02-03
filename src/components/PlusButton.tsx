import React, { MouseEventHandler } from "react";

export type PlusButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function PlusButton(props: PlusButtonProps) {
  const { onClick } = props;

  return (
    <button
      className="border rounded-full w-6 h-6 flex items-center justify-center text-2xl "
      onClick={onClick}
    >
      +
    </button>
  );
}
