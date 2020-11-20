import React, { Component } from "react";
import axios from "axios";

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
      <form id="file-upload" name="file-upload" encType="multipart/form-data">
        <label>Upload for File</label>
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <button onClick={this.onSubmitHandler}>Submit</button>
      </form>
    );
  }
}

export default UploadFile;
