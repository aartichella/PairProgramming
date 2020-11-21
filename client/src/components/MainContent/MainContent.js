import React from "react";
import axios from "axios";
import "./MainContent.scss";
import Hero from "../Hero/Hero";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      currentState: false,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/").then((data) => {
      console.log(data.data.Sheet1);
      this.setState({
        inventory: data.data.Sheet1,
        currentState: false,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);

    if (prevState.inventory !== this.state.inventory) {
      if (this.state.currentState === false) {
        axios.get("http://localhost:8080/").then((data) => {
          this.setState({
            inventory: data.data.Sheet1,
            currentState: true,
          });
        });
      }
    }
  }

  render() {
    if (!this.state.inventory) {
      return <div>Loading</div>;
    }
    const itemList = this.state.inventory;
    return (
      <div className="maincontent">
        <Hero />
        <h1 className="mainheader">From Our Farm To Your Table</h1>
        <ul className="content-card-list">
          <div className="content-card">
            {itemList.map((item) => (
              <div>
                <h1 className="content-card__header">All Organic {item.A}</h1>
                <img src={item.C} className="img" />
                <p className="quantity">In Stock: {item.B} lbs</p>
                <div className="buttonwrap">
                  <button className="buttons">+</button>
                  <button className="buttons mod">-</button>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default MainContent;
