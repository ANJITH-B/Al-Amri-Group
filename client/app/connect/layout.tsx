import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact | Al-Amri Group",
  description: "Al-Amri Group | Your Trusted Wholesale Partner",
};

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Suspense>{children}</Suspense>
    </main>
  );
};

export default page;
