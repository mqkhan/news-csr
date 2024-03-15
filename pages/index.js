import { useEffect, useState } from "react";
import Link from "next/link";
import { useNewsContext } from "@/newsContext";
import News from "./components/news";

const API_NYCKEL = "pub_38592cdffe573c9b3b8954b4dec03fecf9dfe";

export default function Home() {
  return (
    <div>
      <News />
    </div>
  );
}
