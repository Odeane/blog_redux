import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  fetchPostAndUser } from '../actions'
import UserHeader from './userHeader'


export class PostList extends Component {
  
  componentDidMount() {
    this.props.fetchPostAndUser()
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className='large middle aligned icon user' />
          <div className="className">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId}/>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div className=' ui relaxed divided list'>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPostAndUser })(PostList);
