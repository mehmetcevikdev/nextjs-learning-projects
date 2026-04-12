import { Button } from "@/components/ui/button";
import React from "react";

const SectionBlog = () => {
  return (
    <div className="bg-orange-100 mt-12">
      <div className="container mx-auto text-center py-16 px-6 lg:px-28">
        <h2 className="text-2xl lg:text-4xl font-bold text-blue-600 mb-4">
          WELCOME TO TRENDY TRAVEL
        </h2>
        <div className="flex items-center justify-center mb-6">
          <hr className="border-gray-300 w-1/5" />
          <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
          <hr className="border-gray-300 w-1/5" />
        </div>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          distinctio, at labore minus alias sunt dolorum maiores illo laudantium
          quod quasi, rem nesciunt consectetur. Unde beatae nemo cumque aliquid
          asperiores quasi excepturi facilis quae vitae eligendi quibusdam
          laudantium commodi deserunt at, ex tempore error mollitia, dicta
          debitis minus? Deserunt, possimus?
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition">
            Detail
          </Button>
          <Button className="bg-orange-500 text-white py-6 px-8 rounded-lg hover:bg-orange-600 transition">
            Browse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
