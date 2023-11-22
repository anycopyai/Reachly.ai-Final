import React from "react";
import { Skeleton } from "@nextui-org/react";

export default function FullPageSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Skeleton.Circle size="lg" />
      <Skeleton.Text />
      <Skeleton.Text />
      <div className="flex gap-4">
        <Skeleton.Rectangle height="150px" width="150px" />
        <div className="flex flex-col gap-2 flex-grow">
          <Skeleton.Text />
          <Skeleton.Text />
          <Skeleton.Text />
        </div>
      </div>
    </div>
  );
}
