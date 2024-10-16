"use client";
import { useGateway } from "@civic/solana-gateway-react";
import React from "react";

const CivicCustom = () => {
  const { gatewayStatus, gatewayToken } = useGateway();
  return (
    <div>
      <h1>Civic Custom</h1>
      <p>Gateway status: {gatewayStatus}</p>
      <p>Gateway token: </p>
      <pre>{JSON.stringify(gatewayToken, null, 2)}</pre>
    </div>
  );
};

export default CivicCustom;
