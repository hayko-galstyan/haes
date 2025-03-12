"use client";

import { Facebook, Instagram, MapPin, PhoneCall, Zap } from "lucide-react";
import { footer } from "../../data/data.json";
import Title from "./Title";
import Logo from "./Logo";

const Footer = () => {
  const { address, phone } = footer.info;
  const iconSize = 24; // Standardize icon sizes

  return (
    <footer className="w-full bg-black text-white min-h-[300px] flex flex-col-reverse flex-wrap justify-around py-6 gap-[32px] items-center sm:flex-row sm:gap-6 sm:px-8">
      <div className="flex flex-col gap-4">
        <Title text="HAES" className="align-center" />
        <Title variant="h3" className="flex items-center gap-2">
          <Zap size={iconSize} /> 2017
        </Title>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <MapPin size={iconSize} /> {address}
        </li>
        <li className="flex items-center gap-2">
          <PhoneCall size={iconSize} /> {phone}
        </li>
        <li className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/haes_armenia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={iconSize} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={iconSize} />
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <Logo width={100} height={100} />
    </footer>
  );
};

export default Footer;
