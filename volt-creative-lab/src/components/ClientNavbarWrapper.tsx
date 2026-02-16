"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";

export default function ClientNavbarWrapper() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <Navbar open={open} setOpen={setOpen} pathname={pathname} />;
}
