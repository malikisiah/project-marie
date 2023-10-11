"use client";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <h1 className="text-center pt-20 font-bold ">Hello World</h1>
      <div className="pt-32 flex items-center justify-center align-middle gap-6">
        <Button onClick={() => console.log("I've been clicked!")}>
          Click Me
        </Button>
        <Button variant={"secondary"}> No, Click Me</Button>
      </div>
    </>
  );
}
