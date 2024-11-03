import { useEffect } from "react";

export const supplierTypes = ["Brand", "Distributor", "OEM/ODM Manufacturer", "Raw Material Supplier"]
export const revenueStatus  = ["Haven't started selling yet (pre-sales)", "$100 - $10K in sales/ yr", "$10K - S100K in sales/yr", "$100K - $500K in sales/ yr", "$500K - S2M in sales/yr", "$2M - $5M in sales/yr", "More than $5M in sales/ yr"]


export const useDocumentTitle = (title: string) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
