"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        [Jasa yang Dilakukan]
      </p>
      <p className="font-normal text-base text-white">
        [Dimana Jasa ini dilakukan]
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        optional [description]
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        [Jasa yang Dilakukan]
      </p>
      <p className="font-normal text-base text-white">
        [Dimana Jasa ini dilakukan]
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        optional [description]
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        [Jasa yang Dilakukan]
      </p>
      <p className="font-normal text-base text-white">
        [Dimana Jasa ini dilakukan]
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        optional [description]
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        [Jasa yang Dilakukan]
      </p>
      <p className="font-normal text-base text-white">
        [Dimana Jasa ini dilakukan]
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        optional [description]
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/gambar1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/image/Billboard.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/image/neon-box.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/image/street-sign.jpg",
  },
];
