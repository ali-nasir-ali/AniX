import React from "react";
import { SkeletonLine, SkeletonCard } from "../styles/Skeleton";
import Container from "../styles/Container";
import AnimeGrid from "../styles/AnimeGrid";

const GridSkeleton = () => {
  return (
    <Container>
      <SkeletonLine />

      <AnimeGrid>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </AnimeGrid>
    </Container>
  );
};

export default GridSkeleton;
