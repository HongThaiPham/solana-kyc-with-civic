"use client";
import CivicPassProvider from "@/components/providers/CivicPassProvider";
import React from "react";
import { IdentityButton } from "@civic/solana-gateway-react";
import { CAPTCHA_PASS } from "@/lib/constants";
import CivicCustom from "@/components/CivicCustom";

const CaptchaPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CivicPassProvider gateKeeper={CAPTCHA_PASS}>
        <IdentityButton />
        <CivicCustom />
      </CivicPassProvider>
    </div>
  );
};

export default CaptchaPage;
