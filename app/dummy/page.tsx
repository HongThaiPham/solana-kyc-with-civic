"use client";
import CivicPassProvider from "@/components/providers/CivicPassProvider";
import React from "react";
import { IdentityButton } from "@civic/solana-gateway-react";
import { DUMMY_PASS } from "@/lib/constants";
import CivicCustom from "@/components/CivicCustom";

const DummyPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CivicPassProvider gateKeeper={DUMMY_PASS}>
        <IdentityButton />
        <CivicCustom />
      </CivicPassProvider>
    </div>
  );
};

export default DummyPage;
