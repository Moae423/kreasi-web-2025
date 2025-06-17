import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-5">
      <Link href="#">
        <FaFacebook
          size={30}
          color="#f7f7f7"
          className="hover:-translate-y-1 active:translate-y-0 transition duration-150"
        />
      </Link>
      <Link href="#">
        <FaInstagram
          size={30}
          color="#f7f7f7"
          className="hover:-translate-y-1 active:translate-y-0 transition duration-150"
        />
      </Link>
      <Link href="#">
        <FaTwitterSquare
          size={30}
          color="#f7f7f7"
          className="hover:-translate-y-1 active:translate-y-0 transition duration-150"
        />
      </Link>
      <Link href="#">
        <FaYoutube
          size={30}
          color="#f7f7f7"
          className="hover:-translate-y-1 active:translate-y-0 transition duration-150"
        />
      </Link>
    </div>
  );
}
