import React from "react";
// @ts-ignore
import Div100vh from "react-div-100vh";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => <Div100vh>{children}</Div100vh>;
export default Layout;
