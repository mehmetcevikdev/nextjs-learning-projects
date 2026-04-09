"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const AboutMainPage = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(()=>{
    document.title = `count ${count}`
  },[count])

  return (
    <div className="space-x-2">
      <h2>{count}</h2>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  );
};

export default AboutMainPage;
