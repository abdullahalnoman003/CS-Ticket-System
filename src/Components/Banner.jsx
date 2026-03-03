import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto flex gap-4">
        <div
          className="flex-1 rounded-2xl flex flex-col items-center justify-center py-12 text-white text-center overflow-hidden relative"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #4a0072 0%, #7e22ce 40%, #c084fc 100%), url('/vector1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          <p className="text-lg font-semibold uppercase tracking-widest opacity-90 mb-2">
            In Progress
          </p>
          <p className="text-7xl font-extrabold">{inProgressCount}</p>
        </div>
        <div
          className="flex-1 rounded-2xl flex flex-col items-center justify-center py-12 text-white text-center overflow-hidden relative"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #064e3b 0%, #15803d 40%, #4ade80 100%), url('/vector1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          <p className="text-lg font-semibold uppercase tracking-widest opacity-90 mb-2">
            Resolved
          </p>
          <p className="text-7xl font-extrabold">{resolvedCount}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
