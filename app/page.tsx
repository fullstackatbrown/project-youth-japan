import WhatWeDo from "@/components/WhatWeDo";
import PageHero from "@/components/PageHero";
import News from "@/components/News";
import { redirect } from "next/navigation";


export default function RootPage() {
  redirect("/en");
}
