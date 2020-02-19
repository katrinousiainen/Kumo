import React, { Component } from 'react';
import axios from 'axios';
// import { fd } from 'q';
// import { stringify } from 'querystring';


// Tämä ei toimi

class Picture extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(event.target.files[0]);
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('File', this.state.selectedFile);
        console.log(fd);
        console.log(this.state.selectedFile)
        //PUT https://kumotiistai.blob.core.windows.net/kumokuva/photos/myphoto  
        // https://kumotiistai.blob.core.windows.net/kumokuva
        axios.post('https://localhost:44389/api/Picture', this.state.selectedFile,
            // this.state.selectedFile
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        )
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <div className="Picture">
                <input type="file" onChange={this.fileSelectedHandler}></input>
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }

}


export default Picture;