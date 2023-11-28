import { Paper } from "@mui/material";
import { CSSProperties } from "react";
import Image from "next/image";

interface OfferListProps {
  companyName: string;
  description: string;
  width: string;
  height: string;
}

const offerListStyle: CSSProperties = {
  border: "1px solid #ddd",
  padding: "20px",
  margin: "20px 0",
  display: "flex",
  justifyContent: "space-between",
};

function OfferList({
  companyName,
  description,
  width,
  height,
}: OfferListProps) {
  return (
    <Paper style={{ width, height, ...offerListStyle }}>
      <Image
        src="/images/companyLogo.png"
        width={50}
        height={50}
        alt="logo"
        style={{ borderRadius: "20%" }}
      />
      <p>{companyName}</p>
      <p>{description}</p>
      <span>詳細</span>
    </Paper>
  );
}

export default OfferList;
