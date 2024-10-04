"use client"
import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

import { useBalance } from "@repo/store/useBalance"

export default function Home() {
  const balance = useBalance()
  return (
    <div className={styles.page}>
      <h1 className="bg-slate-950 text-white h-10 w-96" >Balance: {balance}</h1>
      <h1 className="bg-slate-950 text-white h-10 w-96" >Checking If tailwindCSS got configured Right</h1>
    </div>
  );
}
