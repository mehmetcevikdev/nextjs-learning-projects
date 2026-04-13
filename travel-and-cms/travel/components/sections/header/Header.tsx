'use client'
import { MessageCircle, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "@/constans";
import SearchPage from "./SearchPage";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname()

  const socialLinks = [
    { href: "#", icon: <FaFacebook size={16} /> },
    { href: "#", icon: <FaXTwitter size={16} /> },
    { href: "#", icon: <FaInstagram size={16} /> },
  ];

  return (
    <header className="bg-black text-white">
      {/*Top Bar */}
      <div className="flex container mx-auto h-16 justify-center md:justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-5">
          <div className="flex gap-3 items-center">
            <div className="bg-white p-2 rounded-full">
              <MessageCircle size={12} className="text-orange-500" />
            </div>
            info@travel.com
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-white p-2 rounded-full">
              <Phone size={12} className="text-orange-500" />
            </div>
            050 505 5005
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="hover:text-orange-500"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/*Navigation Bar */}
      <div className="bg-white h-28 text-black shadow flex items-center">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Image
            src={"/logo.png"}
            alt="Travel"
            width={210}
            height={50}
            className="w-36 lg:w-52 h-auto"
          />

          <nav className="hidden lg:flex space-x-8 text-lg font-semibold ">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${link.href === pathname ? "text-orange-500":"hover:text-orange-500"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <SearchPage />

            <MobileMenu />

            <div className="p-3 bg-sky-400 cursor-pointer text-white rounded-full">
              <User />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
