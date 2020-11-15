import React, { FC } from "react";
import Reply from "./Reply";
import Navigation from "./Navigation";
import "./Layout.css";

interface Props { }

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout row">
      <aside>
        <Navigation />
      </aside>
      <section className="content">
        {children}
        <Reply />
      </section>
    </div>
  )
};

export default Layout;
