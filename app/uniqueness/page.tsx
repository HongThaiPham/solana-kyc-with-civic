"use client";
import CivicPassProvider from "@/components/providers/CivicPassProvider";
import React from "react";
import { IdentityButton } from "@civic/solana-gateway-react";
import { UNIQUENESS_PASS } from "@/lib/constants";

const UniquenessPage = () => {
  return (
    <div className="flex justify-center items-center">
      <CivicPassProvider gateKeeper={UNIQUENESS_PASS}>
        <IdentityButton />
      </CivicPassProvider>
    </div>
  );
};

export default UniquenessPage;
