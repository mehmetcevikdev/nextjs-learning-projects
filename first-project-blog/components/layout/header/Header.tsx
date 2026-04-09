"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, User } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "@/components/ModeToggle";
import useStore from "@/store/useStore";

const Header = () => {
  const { headerText } = useStore();

  return (
    <div className="bg-mycolorlightprimary dark:bg-mycolordarkprimary shadow-sm top-0 ">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl text-white font-bold hover:text-mycolordarkprimary dark:hover:text-mycolorlightprimaryhover"
        >
          {headerText}
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white  hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-white  hover:underline">
            About
          </Link>
          <Link href="/blog" className="text-white  hover:underline">
            Blog
          </Link>
          <Link href="/blog2" className="text-white  hover:underline">
            Blog2
          </Link>
          <Link href="/contact" className="text-white  hover:underline">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="secondary">
            <Search />
          </Button>
          <Link href="/login">
            <Button variant="secondary">
              <User />
            </Button>
          </Link>
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
