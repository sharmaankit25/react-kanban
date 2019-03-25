import React, { Component } from "react";
import { connect } from "react-redux";
import { addBoard } from "./actions/index";
import { Link } from "react-router-dom";

export class BoardList extends Component {
  state = {
    title: ""
  };

  addBoard = e => {
    e.preventDefault();
    const { title } = this.state;
    if (title) {
      this.props.addBoard({ title });
      this.setState({ title: "" });
    }
  };

  renderBoardsList = () => {
    return this.props.boards.map((board, index) => {
      return (
        <div key={index} className="column">
          <Link to={`/board/${board.id}`}>
            <h5>{board.title}</h5>
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Boards</h1>
        <form onSubmit={this.addBoard}>
          <input
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Board Name..."
          />
          <button>+</button>
        </form>
        <hr />
        <div className="columns">{this.renderBoardsList()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ boards }) => {
  return {
    boards
  };
};

export default connect(
  mapStateToProps,
  { addBoard }
)(BoardList);
