import { Globe } from "@/components/Globe";
import SocialLinks from "@/components/SocialLinks";
import React from "react";

const page = () => {
  return (
    <div>
      <Globe />
      <div className="fixed right-8 top-1/2 hidden -translate-y-1/2 transform md:flex xl:right-24 2xl:right-28 z-50">
        <SocialLinks />
      </div>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 transform md:hidden z-50">
        <SocialLinks />
      </div>
    </div>
  );
};

export default page;