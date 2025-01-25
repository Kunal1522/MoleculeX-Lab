import Index from "./components/Dashboard";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { Metadata } from "next";
import dotenv from "dotenv";
dotenv.config();

export const metadata:Metadata={
  title:"DRUG RESEARCH TOOL",
  description:"HELPS U RESEARCH "
}
export default function Home() {
  return (
    <>
      <DefaultLayout>
      <Index/>      </DefaultLayout>
    </>
  );
}
