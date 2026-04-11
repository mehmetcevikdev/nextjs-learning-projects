import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navigationLinks } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: <FaFacebook size={16} /> },
    { href: "#", icon: <FaXTwitter size={16} /> },
    { href: "#", icon: <FaInstagram size={16} /> },
  ];
  

  const instagramImages = Array.from(
    { length: 11 },
    (_, index) => `/instagram/${index + 1}.jpg`,
  );

  return (
    <footer className="relative bg-black text-white">
      <div className="absolute -top-52 left-1/2 transform -translate-x-1/2 bg-orange-500 text-left px-6 py-12 rounded-md shadow-lg w-11/12 max-w-6xl h-72 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
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

      <div className="container mx-auto py-32 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 ">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold">Travel</h3>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            voluptatum a odit! Quasi corporis inventore nulla, nam non natus
            delectus, quo laboriosam nihil fugiat corrupti.
          </p>
          <div className=" flex mt-4 space-x-4">
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

        <div className="useful-links-wrapper">
          <h4 className="text-xl font-bold mb-4">Useful Links</h4>
          <div className="space-y-2 text-sm">
            {navigationLinks.map((navigation, index) => (
              <Link
                href={navigation.href}
                key={index}
                className="block hover:text-orange-500"
              >
                {navigation.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold">Instagram</h3>
          <div className="grid grid-cols-6 gap-2">
            {instagramImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Instagram Image ${index + 1} `}
                width={50}
                height={50}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xl font-bold mb-4">Subscribe</h4>
          <p className="text-sm mb-4">
            Subscribe our newsletter for getting quick updates.
          </p>
          <div className="flex flex-col sm:flex-row">
            <Input
              type="email"
              placeholder="Your Email address"
              className="w-full px-4 h-8 rounded-none "
            />
            <Button className="px-4 h-8 rounded-none border border-orange-500 bg-orange-500 hover:bg-orange-600">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 text-center text-sm border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            Copyright © 2026 <span className="text-orange-500">Travel</span>
          </div>
          <div>
            <span className="text-orange-500">Youtube</span> Frontend Weekly
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
