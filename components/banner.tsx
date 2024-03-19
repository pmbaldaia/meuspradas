"use client";

import { useState } from "react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-2 md:right-2 md:w-auto z-50">
          <div className=" text-slate-50 text-sm p-3 md:rounded shadow-lg relative">
            <button
              className="text-slate-500 absolute top-0 right-0 p-3"
              onClick={() => setBannerOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </button>
            <div className="inline-flex p-2">
              <img
                src="/images/bannerhorizontal.jpg"
                style={{ width: "30rem" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
