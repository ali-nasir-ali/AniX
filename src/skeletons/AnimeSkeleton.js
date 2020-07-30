import React from "react";
import {
  SkeletonLine,
  SkeletonBanner,
  SkeletonPoster,
  SkeletonDesc,
} from "../styles/Skeleton";
import { AnimeWrapper } from "../pages/Anime";

const GridSkeleton = () => {
  return (
    <AnimeWrapper>
      <SkeletonBanner />

      <div className="info-tab">
        <div className="info-tab-content">
          <SkeletonPoster />
          <div className="info-tab-data">
            <SkeletonLine />
            <SkeletonDesc />
          </div>
        </div>
      </div>
    </AnimeWrapper>
  );
};

export default GridSkeleton;
