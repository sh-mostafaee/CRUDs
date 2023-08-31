import React from "react";
import Image from "next/image";

export type LoadingProps = {
  fullScreen?: boolean;
};

export function Loading(props: LoadingProps) {
  const { fullScreen } = props;

  const className = fullScreen
    ? "fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center"
    : "";

  return (
    <div className={className}>
      <Image
        src="/assets/images/loading.svg"
        width={100}
        height={100}
        alt="Picture of the author"
      />
    </div>
  );
}
