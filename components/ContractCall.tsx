"use client";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import React from "react";
import { Button } from "./ui/button";
import { AnchorProvider, Program, Wallet, BN } from "@coral-xyz/anchor";

import idl from "@/lib/artifacts/test_program.json";
import { TestProgram } from "@/lib/artifacts/test_program";
import { useGateway } from "@civic/solana-gateway-react";
const ContractCall = () => {
  const { gatewayToken } = useGateway();
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const wallet = useAnchorWallet();
  const handleClick = async () => {
    console.log("Calling contract");
    if (!wallet || !publicKey || !gatewayToken) {
      return;
    }
    const provider = new AnchorProvider(connection, wallet as Wallet);
    const program = new Program(idl as TestProgram, provider);
    const tx = await program.methods
      .initialize()
      .accounts({
        signer: publicKey,
        gatekeeperNetwork: gatewayToken.gatekeeperNetworkAddress,
        gatewayToken: gatewayToken.publicKey,
      })
      .rpc();

    console.log(tx);
  };
  return (
    <div>
      <Button onClick={handleClick}>Call Contract</Button>
    </div>
  );
};

export default ContractCall;
