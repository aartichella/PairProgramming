import React from "react";
import axios from "axios";
import "./MainContent.scss";
import tomato from "../../assets/tomato.jpg";
import carrots from "../../assets/carrots.jpg";
import potato from "../../assets/potato.jpg";
import corn from "../../assets/corn.jpg";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/").then((data) => {
      console.log(data.data.Sheet1);
      this.setState({
        inventory: data.data.Sheet1,
      });
    });
  }
  render() {
    if (!this.state.inventory) {
      return <div>Loading</div>;
    }
    const itemList = this.state.inventory;
    console.log("HIIII", itemList);
    return (
      <div className="maincontent">
        <h1 className="mainheader">From Us to You</h1>

        <ul className="content-card-list">
          <div className="content-card">
            {itemList.map((item) => (
              <div>
                <h1 className="content-card__header">All Organic {item.A}</h1>
                <img src={tomato} alt="tomato" className="img" />
                <p className="quantity">In Stock: {item.B}</p>
              </div>
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default MainContent;

{
  /* <div className="maincontent">
<h1 className="mainheader">From Us to You</h1>
<ul>
  {itemList.map((item) => (
    <li key={item.A}>{item.A}</li>
  ))}
</ul>
<ul className="content-card-list">
  <div className="content-card">
    <div>
      <h1 className="content-card__header">All Organic Tomato's</h1>
      <img src={tomato} alt="tomato" className="img" />
      <p className="quantity">Quantity</p>
    </div>
    <div>
      <h1 className="content-card__header">All Organic Potatos</h1>
      <img src={potato} alt="tomato" className="img" />
      <p className="quantity">Quantity</p>
    </div>
    <div>
      <h1 className="content-card__header">All Organic Carrots</h1>
      <img src={carrots} alt="tomato" className="img" />
      <p className="quantity">Quantity</p>
    </div>
    <div>
      <h1 className="content-card__header">All Organic Corn</h1>
      <img src={corn} alt="tomato" className="img" />
      <p className="quantity">Quantity</p>
    </div>
  </div>
</ul>
</div> */
}

{
  /* <ul > */
}

{
  /* <div>
              <h1 className="content-card__header">All Organic Potatos</h1>
              <img src={potato} alt="tomato" className="img" />
              <p className="quantity">Quantity</p>
            </div>
            <div>
              <h1 className="content-card__header">All Organic Carrots</h1>
              <img src={carrots} alt="tomato" className="img" />
              <p className="quantity">Quantity</p>
            </div>
            <div>
              <h1 className="content-card__header">All Organic Corn</h1>
              <img src={corn} alt="tomato" className="img" />
              <p className="quantity">Quantity</p>
            </div> */
}

{
  /* </ul> */
}
