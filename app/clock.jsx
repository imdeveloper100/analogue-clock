import React from "react";
import Image from "next/image";

function Clock() {
  return (
    <div>
      <div className="bg-gray-100 min-w-[200px] min-h-[200px] relative rounded-full">
        <Image
          src="/Ellipse 29 (1).png"
          width={500}
          height={500}
          alt="Smaller ticks"
        />
        <Image
          src="/Ellipse 29.png"
          fill
          alt="Smaller ticks"
        />
        <div className="absolute origin-center">
        <Image
          src="/Group 1500.png"
          width={100}
          height={100}
          alt="Smaller ticks"
          
        />
        </div>
      </div>
    </div>
  );
}

export default Clock;
