import { NavbarItemType } from "@/types/Navbar.type";
import { PublicKey } from "@solana/web3.js";

export const NAVBAR_ITEMS: NavbarItemType[] = [
  {
    label: "Captcha",
    link: "/captcha",
  },
  {
    label: "Uniqueness",
    link: "/uniqueness",
  },
  {
    label: "Dummy",
    link: "/dummy",
  },
];

export const UNIQUENESS_PASS = new PublicKey(
  "uniqobk8oGh4XBLMqM68K8M2zNu3CdYX7q5go7whQiv"
);
export const CAPTCHA_PASS = new PublicKey(
  "ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6"
);
export const DUMMY_PASS = new PublicKey(
  "tgnuXXNMDLK8dy7Xm1TdeGyc95MDym4bvAQCwcW21Bf"
);
