"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./context/UserContext";
import React, { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
       <script src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"></script>
      <body suppressHydrationWarning={true}>
        {" "}
        <SessionProvider>
          {" "}
          <UserProvider>{children} </UserProvider>
        </SessionProvider>{" "}
      </body>
    </html>
  );
}
