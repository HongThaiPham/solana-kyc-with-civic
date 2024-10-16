"use client";
import CivicPassProvider from "@/components/providers/CivicPassProvider";
import React from "react";
import { IdentityButton } from "@civic/solana-gateway-react";
import { CAPTCHA_PASS } from "@/lib/constants";

const CaptchaPage = () => {
  return (
    <div className="flex justify-center items-center">
      <CivicPassProvider gateKeeper={CAPTCHA_PASS}>
        <IdentityButton />
      </CivicPassProvider>
    </div>
  );
};

export default CaptchaPage;
