import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterCTA = () => {
  return (
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-orange-500 text-left px-6 py-12 rounded-md shadow-lg w-11/12 max-w-6xl h-72 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      <div>
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="mt-2 text-lg">
          It only takes a few minutes to register your FREE Travel account.
        </p>
        <Link href="/register">
          <Button className="mt-4 bg-white text-orange-500 px-6 py-2 font-semibold rounded shadow-md">
            OPEN AN ACCOUNT
          </Button>
        </Link>
      </div>
      <div className="flex justify-center relative">
        <Image
          height={456}
          width={564}
          src="/travelfooter.png"
          alt="Call to action graphic"
          className="hidden md:block absolute w-full -bottom-28"
        />
      </div>
    </div>
  );
};

export default FooterCTA;
