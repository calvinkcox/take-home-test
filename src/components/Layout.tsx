import React, { FC } from "react";
import Reply from "./Reply";
import Navigation from "./Navigation";
import "./Layout.css";

interface Props {
  isChatRoom?: boolean;
}

const Layout: FC<Props> = ({ isChatRoom = true, children }) => {
  return (
    <div className="layout row">
      <aside>
        <Navigation />
      </aside>
      <section className="content">
        { children }
        { isChatRoom && <Reply /> }
      </section>
    </div>
  )
};

export default Layout;
