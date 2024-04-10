import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="items-center justify-center flex h-full w-full">
      {children}
    </div>
  );
}
