import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import Link from "next/link";
import React from "react";

export default function MarketingLayout({
  children,
}:{
  children: React.ReactNode;
}){
  return(
    <div className=" flex flex-col items-center">
      <header className=" container z-40 bg-background">
        <div className=" h-20 py-6 flex items-center justify-between px-4">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="">
            <Link href={"/"} className={`${buttonVariants({variant:"secondary", size:"sm"})} px-4`}>
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <SiteFooter/>
    </div>
  )
}