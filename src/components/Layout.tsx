import React, { FC } from "react";
import Reply from "./Reply";
import Navigation from "./Navigation";
import "./Layout.css";

interface Props { }

const Layout: FC<Props> = () => {
  return (
    <div className="layout row">
      <aside>
        <Navigation />
      </aside>
      <section className="content">
        <div>Put chat messages here...</div>
        <Reply />
      </section>
    </div>
  )
};

export default Layout;
