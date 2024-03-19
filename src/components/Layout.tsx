import Navbar from "./Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};
