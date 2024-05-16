import React from "react";
import Icons from "./nav-links";

const Sidebar = () => {
  return (
    <header className="shadow-3xl h-1/6 flex  w-full flex-col gap-y-2 md:h-full  md:w-1/6">
      <div className="flex h-2/3 items-end rounded-lg bg-green-400 px-2 md:h-3/4">
        <h1 className="text-3xl">Dashbord</h1>
      </div>
      <div className="flex h-1/2 w-full">
        <Icons />
      </div>
      <div className="rounded-lg bg-zinc-200 md:h-full"></div>
    </header>
  );
};

export default Sidebar;
