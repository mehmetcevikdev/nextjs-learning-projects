import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="secondary" className="md:hidden" />}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center mb-8">
            <Link href="/" className="text-2xl  text-black font-bold">
              Logo
            </Link>
          </SheetTitle>
          <nav className="flex flex-col items-start space-y-4">
            <Link href="/" className="text-black  hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-black  hover:underline">
              About
            </Link>
            <Link href="/blog" className="text-black  hover:underline">
              Blog
            </Link>
            <Link href="/blog2" className="text-black  hover:underline">
              Blog2
            </Link>
            <Link href="/contact" className="text-black  hover:underline">
              Contact
            </Link>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
