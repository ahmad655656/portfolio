import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaYoutube />, path: "" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} className={iconStyles} href={item.path}>{item.icon}</Link>;
      })}
    </div>
  );
};

export default Social;
