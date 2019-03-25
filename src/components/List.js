import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "./actions/index";
class List extends Component {
  state = {
    card: ""
  };
  addCard = e => {
    e.preventDefault();
    const { card } = this.state;
    if (card) {
      this.props.addCard(card, this.props.list.id);
      this.setState({ card: "" });
    }
  };

  renderCards = () => {
    return this.props.cards
      .filter(card => card.list_id === this.props.list.id)
      .map(card => {
        return (
          <li key={card.id} className="list-group-item">
            <div>
              {card.title}
              <span style={{ float: "right" }}>X</span>
            </div>
          </li>
        );
      });
  };

  render() {
    return (
      <React.Fragment>
        <h2>{this.props.list.title}</h2>
        <form onSubmit={this.addCard}>
          <input
            type="text"
            placeholder="Add Task.."
            value={this.state.card}
            onChange={e => this.setState({ card: e.target.value })}
          />
          <button>+</button>
        </form>
        <ul className="list-group">{this.renderCards()}</ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ cards }) => {
  return {
    cards
  };
};

export default connect(
  mapStateToProps,
  { addCard }
)(List);
