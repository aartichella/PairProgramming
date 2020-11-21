import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UploadFile.scss";

class UploadFile extends Component {
  constructor() {
    super();
    this.state = {
      uploadedFile: null,
    };
  }

  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      uploadedFile: event.target.files[0],
      loaded: 0,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.uploadedFile);
    axios.post("http://localhost:8080/upload", data).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="upload">
        <form
          className="form"
          id="file-upload"
          name="file-upload"
          encType="multipart/form-data"
        >
          <label className="label">Upload Your File</label>
          <input
            className="textarea"
            type="file"
            name="file"
            onChange={this.onChangeHandler}
          />

          <button className="button" onClick={this.onSubmitHandler}>
            <Link className="link2" to="/">
              Upload File
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default UploadFile;
