"use client"

import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

import { useBalance } from "@repo/store/useBalance"
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const balance = useBalance()

  const session = useSession()


  return (
    <div className={styles.page}>
      <h1 className="bg-slate-950 text-white h-10 w-96" >Balance: {balance}</h1>
      <h1 className="bg-slate-950 text-white h-10 w-96" >Checking If tailwindCSS got configured Right</h1>
      <h1 className="bg-slate-950 text-white h-10 w-96" >Checking Auth-Thingy</h1>

      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      
    </div>
  );
}
