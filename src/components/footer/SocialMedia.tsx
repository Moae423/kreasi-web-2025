import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-5">
      <Link href="#">
        <FaFacebook />
      </Link>
      <Link href="#">
        <FaInstagram />
      </Link>
      <Link href="#">
        <FaTwitterSquare />
      </Link>
      <Link href="#">
        <FaYoutube />
      </Link>
    </div>
  );
}
