'use client'

import React from "react";
import { HomeIcon } from "lucide-react";
import Link from 'next/link';
import clsx from "clsx";
import { usePathname } from 'next/navigation';

const linksIcons = [
  { name: "casa", icon: <HomeIcon size={30} />, href: "/" },
  { name: "carro", icon: <HomeIcon size={30} />, href: "/test" },
  { name: "computador", icon: <HomeIcon size={30} />, href: "/tes" },
  { name: "coração", icon: <HomeIcon size={30} />, href: "/te" },
  { name: "coração", icon: <HomeIcon size={30} />, href: "/tte" },
];


export default function NavLinks( { status = 'paid' }) {
  const pathname = usePathname();
  return (
    <div className='flex  md:flex-col w-full gap-2'>

      {linksIcons.map((link) => (
          <Link
          key={link.name}
          href={link.href}
          className={clsx('rounded-lg  w-full flex md:p-2 gap-x-2 items-center bg-zinc-200 h-10 md:h-14',
          {
            'text-green-500': pathname === link.href,
          },
          
          )}
        >
          <li className="flex justify-center m-auto md:m-0">{link.icon}</li>
          <li className="hidden md:flex">{link.name}</li>
        </Link>     
      ))}
      {/*
      {linksIcons.map((item, index) => (
        <ul key={index} className="rounded-lg  w-full flex md:p-2 gap-x-2 items-center bg-zinc-200 h-10 md:h-14">
          <li className="flex justify-center m-auto md:m-0">{item.icon}</li>
          <li className="hidden md:flex">{item.name}</li>
        </ul>

        className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      ))}
       */}

    </div>
     
  );
}



