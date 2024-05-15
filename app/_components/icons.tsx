import React from "react";
import { HomeIcon } from "lucide-react";

const icons = [
  { name: "casa", icon: <HomeIcon size={30} /> },
  { name: "carro", icon: <HomeIcon size={30} /> },
  { name: "computador", icon: <HomeIcon size={30} /> },
  { name: "coração", icon: <HomeIcon size={30} /> },
  { name: "coração", icon: <HomeIcon size={30} /> },
];

function Icons() {
  return (
    <div className='flex  md:flex-col w-full gap-2'>
      {icons.map((item, index) => (
        <ul key={index} className="rounded-lg  w-full flex md:p-2 gap-x-2 items-center bg-zinc-200 h-10 md:h-14">
          <li className="flex justify-center m-auto md:m-0">{item.icon}</li>
          <li className="hidden md:flex">{item.name}</li>
        </ul>
      ))}

    </div>
     
  );
}

export default Icons;
