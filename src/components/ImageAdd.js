import React from 'react';

class ImageAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="card-img-top" src={imagePreviewUrl} alt="kuva" />);
    }

    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <form onSubmit={this._handleSubmit}>
          <label className="btn btn-default"> <input type="file" onChange={this._handleImageChange} /></label> <br />
          {/* <button type="submit" className="btn btn-light" onClick={this._handleSubmit}>Tallenna kuva</button> */}
        </form>
        <div className="card">{$imagePreview}</div>
      </div>
    )
  }

}

export default ImageAdd;


// // Alustetaan parametrit
// class ImageAdd extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//         Itempicture: '',
//         }
//     }

// // tästä alaspäin liittyy kuvan lataamiseen ja lähettämiseen serverille
// // to upload the file it is stored to state:
// // state = { selectedFile: null }

// // two handler methods that trigger from any changes to 
// fileChangedHandler = event => {
//   this.setState({ Itempicture: event.target.files[0] })
// }

// uploadHandler = () => {
//   console.log(this.state.Itempicture)
// }

// uploadHandler = () => {
//   const formData = new FormData()
//   formData.append(
//     'myFile',
//     this.state.Itempicture,
//     this.state.Itempicture.name
//   )
//   axios.post('/app/id', formData)
// }

// render() {
//     return (
//         <div>
//             <Input type="file" onChange={this.fileChangedHandler}></Input>
//             <Button onClick={this.uploadHandler}>Lataa kuva</Button>
//         </div>
//     );
// }

// // render() {
// //     return (
// //         <div class="col s12">
// //                         <Input type="file" onChange={this.fileChangedHandler}></Input>
// //                         <Button onClick={this.uploadHandler}>Lataa kuva</Button>
// //             {/* <fieldset class="Photo_fieldset" alignItems="center">
// //                 {/* <legend class="Photo_legend">Kuva</legend> */}
// //                 {/* <div class="row">
// //                     <div class="Photo dropzone"> */} */}
// //                         {/* <Box
// //                         display="flex" 
// //                         width={1000} height={300} 
// //                         bgcolor="grey"
// //                         alignItems="center"
// //                         justifyContent="center"
// //                         >
// //                         <AddAPhotoIcon onPress={this.fileChangedHandler} color="action" style={{ fontSize: 100 }} type="file" capture="camera" accept="image/*" onChange={this.fileChangedHandler}  />
// //                         {/* <i class="material-icons center large Photo__addPhoto__3q0xv">add_a_photo</i> */}
// //                         {/* <AddAPhotoIcon  color="action" style={{ fontSize: 100 }} />
// //                         <input type="file" capture="camera" accept="image/*" onChange={this.fileChangedHandler}></input> */}
// //                         {/* <Input type="file" capture="camera" accept="image/*" onChange={this.fileChangedHandler}></Input> */}
// //                         {/* </Box> */} */}
// //                     {/* </div>
// //                 </div>
// //             </fieldset>
// //          */}
// //         </div>
// //     );
// // }
// }
// export default ImageAdd; 