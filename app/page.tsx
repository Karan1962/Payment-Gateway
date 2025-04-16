"use client";
import React from "react";
import { invoiceData } from "./constants/index.js";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Sale Invoices</h1>
      {invoiceData.map((item) => {
        return (
          <div key={item.id} style={{ paddingBottom: "10px" }}>
            <p>Invoice No {item.id}</p>
            <Link href={item.url} target="blank" style={{ color: "blue" }}>
              view/download
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
