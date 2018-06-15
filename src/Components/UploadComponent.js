import React, { Component } from 'react';
import Container from '../Containers/Container';

class UploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    }
 

  }

  onChange(e) {

    function getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }

    var file = e.target.files[0];
    getBase64(file); // prints the base64 string


    // let jsonData = {
    //   a: 1,
    //   b: 2
    // }
    // const url = 'http://192.168.14.126/test/test.php';
    // const formData = new FormData();
    // formData.append('file', e.target.files[0])
    // console.warn("file", formData)
    // let result = fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   },
    //   body: formData
    // })

    // result.then((dataJson) => {
    //   dataJson.json().then((data) => {
    //     console.warn("data", data)
    //   })
    // })

  }
  render() {
    return (
      <div>

        <h1>File Upload</h1>
        <input type="file" onChange={(e) => this.onChange(e)} />
        <button type="submit">Upload</button>

      </div>

    );
  }
}


export default UploadComponent;
