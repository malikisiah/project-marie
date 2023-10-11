import Image from "next/image";
import { Button } from "./button";

export default function Hero() {
  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#5C0099] to-black ">
      <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            One page Template for
            <span className="text-indigo-400"> Digital agency</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start"></div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <Image
            src="/image.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
            width={500}
            height={500}
            quality={100}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
