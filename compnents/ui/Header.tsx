"use client";

import { useState } from "react";
import { PATHS } from "@/config/constant";
import Link from "next/link";
import Button from "./Button";
import { PanelTopClose, PanelTopOpen, PhoneCall } from "lucide-react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onToggle = () => setOpenMenu((prev) => !prev);

  return (
    <header className="w-full shadow-md flex p-4 justify-between items-center">
      <div className="md:hidden">
        {!openMenu ? (
          <PanelTopOpen onClick={onToggle} />
        ) : (
          <PanelTopClose onClick={onToggle} />
        )}
      </div>

      <div>Logo</div>
      <ul
        className={`flex gap-4 ${
          openMenu
            ? "flex flex-col absolute top-16 left-0 bg-white w-full p-4 shadow-md md:hidden"
            : "hidden"
        } md:flex md:flex-row md:relative md:bg-transparent md:p-0 md:shadow-none`}
      >
        {Object.keys(PATHS).map((item) => (
          <Link
            key={`header-${item}`}
            href={PATHS[item as keyof typeof PATHS]}
            className="hover:text-red-500 transition duration-300 ease-in-out"
          >
            {item}
          </Link>
        ))}
      </ul>
      <Button text={<PhoneCall size={14} />} />
    </header>
  );
};

export default Header;
