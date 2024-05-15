import React from "react";
import Icons from "./icons";

const Sidebar = () => {
  return (
    <header className="w-full md:w-1/6 shadow-3xl flex h-1/6 flex-col gap-y-2  md:h-full">
      <div className="flex h-2/3 md:h-1/4 items-end rounded-lg bg-green-500 px-2">
        <h1 className="text-3xl">Dashbord</h1>
      </div>
      <div className="flex h-1/2 w-full">
        <Icons />
      </div>
      <div className="md:h-full bg-zinc-200 rounded-lg">

      </div>
    </header>
  );
};

export default Sidebar;
