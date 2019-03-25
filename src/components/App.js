import React, { Component } from "react";
import BoardList from "./BoardList";
import Layout from "./layouts/Layout";
class App extends Component {
  render() {
    return (
      <Layout>
        <BoardList />
      </Layout>
    );
  }
}

export default App;
