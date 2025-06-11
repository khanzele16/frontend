import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { SearchHeader } from "@/app/components/SearchHeader";
// import Search from "../Search/Search";

const catalog = [
  { name: "Главная", href: "/" },
  { name: "Каталог", href: "/catalog" },
  { name: "Shorts", href: "/shorts" },
];

function Header() {
  return (
    <div className="w-full fixed t-0 h-[60px] px-[85px] flex flex-row items-center justify-between content-between bg-[#171717] z-99">
      <div className="relative flex items-center gap-x-[50px]">
        <Link href="/">
          <Image
            className="relative bottom-[4px]"
            src="/logo.svg"
            width={110}
            height={20}
            alt="Logo"
          />
        </Link>
        <ul className="flex flex-row items-center justify-center content-center gap-[24px]">
          {catalog.map((item, index) => (
            <Link href={item.href} key={index}>
              <li className="text-[#878787] font-[600] text-[16px]">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <SearchHeader />
      <button className="flex flex-row items-center gap-[6px] text-[#878787] font-[600] text-[16px] cursor-pointer">
        <CircleUserRound color="#878787" size={22} strokeWidth={1.5} />
        Войти
      </button>
    </div>
  );
}

export default Header;
