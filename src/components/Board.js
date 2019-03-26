import React, { Component } from "react";
import List from "./List";
import Layout from "./layouts/Layout";
import { connect } from "react-redux";
import { addList } from "./actions/index";

class Board extends Component {
  state = {
    list: ""
  };

  addList = e => {
    e.preventDefault();
    const { list } = this.state;
    const board_id = this.props.match.params.id;
    if (list) {
      this.props.addList(list, board_id);
      this.setState({ list: "" });
    }
  };

  renderLists() {
    return this.props.lists
      .filter(list => this.props.match.params.id === list.board_id)
      .map((list, index) => {
        return (
          <div key={index} className="column">
            <List list={list} />
          </div>
        );
      });
  }

  render() {
    return (
      <Layout>
        <h2>Board Title</h2>
        <form onSubmit={this.addList}>
          <input
            type="text"
            placeholder="List Name.."
            value={this.state.list}
            onChange={e => this.setState({ list: e.target.value })}
          />
          <button>+</button>
        </form>
        <hr />

        <div className="columns">{this.renderLists()}</div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ lists }) => {
  return {
    lists
  };
};

export default connect(
  mapStateToProps,
  { addList }
)(Board);
