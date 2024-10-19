import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-5 shadow-sm bg-gray-50 border-b">
      <div className="flex justify-center items-center">
        <Image
          src={"/logo.ico"}
          width={50}
          height={50}
          className="bg-black opacity-70 inset-0"
        />
        <h2>
          <span className="text-primary font-medium text-2xl">Course</span>{" "}
          <span className="text-pink-700 font-medium text-2xl">Craft</span>
        </h2>
      </div>

      <Button className="mt-4 justify-center items-center">Get Started</Button>
    </div>
  );
}

export default Header;
