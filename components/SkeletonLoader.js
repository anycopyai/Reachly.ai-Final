import React from "react";
import { Skeleton } from "@nextui-org/react";

const SkeletonLoader = () => {
  return (
    <div className="flex">
      {/* Sidebar Skeleton with Full Height */}
      <div className="w-1/5 h-screen p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-16 rounded mb-2" />
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 py-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-32 rounded mb-4" />
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
