"use client";
import CivicPassProvider from "@/components/providers/CivicPassProvider";
import React from "react";
import { IdentityButton } from "@civic/solana-gateway-react";
import { DUMMY_PASS } from "@/lib/constants";

const DummyPage = () => {
  return (
    <div className="flex justify-center items-center">
      <CivicPassProvider gateKeeper={DUMMY_PASS}>
        <IdentityButton />
      </CivicPassProvider>
    </div>
  );
};

export default DummyPage;
