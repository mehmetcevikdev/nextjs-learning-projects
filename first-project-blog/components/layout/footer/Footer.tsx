"use client";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";
import { MoveLeft, MoveRight, MoveUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {

  const { footerText } = useStore();
  
  return (
    <div className="bg-myprimarycolor text-warning py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left space-y-4">
          <Link href="/" className="text-xl text-white font-bold">
            {footerText}
          </Link>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <nav className="md:mt-0 mt-8 space-x-4">
          <Link href="/" className="text-white  hover:underline">
            Home
          </Link>
          <Link href="/" className="text-white  hover:underline">
            About
          </Link>
          <Link href="/" className="text-white  hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="text-white  hover:underline">
            Contact
          </Link>
        </nav>
        <div className="md:mt-0 mt-8 space-x-4">
          <Button variant="secondary" size={"icon"}>
            <MoveLeft />
          </Button>
          <Button variant="secondary" size={"icon"}>
            <MoveUp />
          </Button>
          <Button variant="secondary" size={"icon"}>
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
