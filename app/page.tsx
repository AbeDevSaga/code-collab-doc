"use client";

import ContentNavigation from "./docs/Component/Navigation";
import IntroductionPage from "./docs/Introduction/page";

export default function main() {
  return (
    <div className="w-full h-full text-white">
      <IntroductionPage/>
      <ContentNavigation/>
    </div>
  );
}
