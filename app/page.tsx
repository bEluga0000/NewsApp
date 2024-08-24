"use client";
import Main from "@/components/main";
import { useEffect, useState } from "react";

export default function Home() {
  const [keyPressed,setKeyPressed] = useState<null|string>(null)
  function detect(e: any) {
    if(e.key == "Enter")
    {
      setKeyPressed("Enter")
    }
    else
      setKeyPressed(null)
  }
  useEffect(()=>{
    document.addEventListener("keydown", detect, true)
    return ()=>{
      document.removeEventListener("keydown",detect,true) 
    }
  })
  return (
    <div>
      <Main keyPressed={keyPressed}/>
    </div>
  );
}
