import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { getPostsById } from '../functions/postsHandler';


class GetPosts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId')
    axios.get(`https://kumoapi.azurewebsites.net/api/Posts/` + userId)
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: 'Ei näytettäviä ilmoituksia' })
      })
  }


  render() {
    const { posts } = this.state
    return (
      <div><h1>Omat ilmoituksesi</h1>
        <div className="card-deck">
          {
            posts.length ?
              posts.map(post =>
                <div className="col-sm-4">
                  <div key={post.itemId} className="card">
                    <img className="card-img-top" src={post.itempicture} alt="kuva" />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">
                        {post.quantity}{' '}kpl<br />
                        {post.info}<br />
                        {post.itemlocation}</p>
                      <button type="button"  id="button" className="btn btn-light"><Link to={{ pathname: `/Update/${post.itemId}` }}>Muokkaa</Link></button>{' '}
                    </div></div></div>) :
              null
          }
        </div>
      </div>
    )
  }
}

export default GetPosts;
