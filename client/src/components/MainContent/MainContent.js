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
        <h1 className="mainheader">From Us to You</h1>
        <ul className="content-card-list">
          <div className="content-card">
            {itemList.map((item) => (
              <div>
                <h1 className="content-card__header">All Organic {item.A}</h1>
                <img
                  src="https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                  alt="tomato"
                  className="img"
                />
                <p className="quantity">In Stock: {item.B} lbs</p>
              </div>
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default MainContent;
