import localFont from "next/font/local";
export const Stardom = localFont({
  src: [
    {
      path: "../assets/fonts/stardom/Stardom-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/stardom/Stardom-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const Satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/satoshi/Satoshi-Variable.woff",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Variable.woff2",
    },
  ],
  display: "swap",
});
