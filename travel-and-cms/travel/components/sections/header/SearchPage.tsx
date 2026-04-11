import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const SearchPage = () => {
  return (
    <Dialog>
      <DialogTrigger className="p-3 flex bg-orange-500 cursor-pointer text-white rounded-full">
        <Search />
      </DialogTrigger>
      <DialogContent className="bg-mist-300">
        <DialogTitle>Search what you need?</DialogTitle>
        <div className=" h-10 flex flex-row items-center justify-center gap-2">
          <Input placeholder="Search..." className="w-full h-full" />
          <Button className="w-12 tex h-full bg-orange-500 hover:bg-orange-600">
            <Search />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchPage;
