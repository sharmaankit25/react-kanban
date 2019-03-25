import React from "react";
import Nav from "../Nav";
const Layout = props => {
  return (
    <React.Fragment>
      <div className="App">
        <Nav />
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
