"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { FC, PropsWithChildren } from "react";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { PublicKey } from "@solana/web3.js";

type Props = {
  gateKeeper: PublicKey;
} & PropsWithChildren;

const CivicPassProvider: FC<Props> = ({ children, gateKeeper }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  return (
    <GatewayProvider
      wallet={wallet}
      connection={connection}
      cluster="devnet"
      gatekeeperNetwork={gateKeeper}
      options={{ autoShowModal: true }}
      // gatekeeperSendsTransaction={true}
    >
      {children}
    </GatewayProvider>
  );
};

export default CivicPassProvider;
