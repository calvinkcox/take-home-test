import React, { FC } from "react";
import Reply from "./Reply";
import Navigation from "./Navigation";

interface Props { }

const Layout: FC<Props> = () => {
  return (
    <div className="layout">
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
