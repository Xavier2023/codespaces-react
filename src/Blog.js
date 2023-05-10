import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function Blog() {

    const [post, setPost] =useState({
        title: '',
        body: ''
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => console.log(res.data))
    }, [])

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/posts/3', {post})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    const deletePost = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/3')
        .then(() => {
            alert('post deleted')
        })
    }
  return (
    <div className='d-flex align-items-center justify-content-center vh-100 w-100'>
        <div className="w-50 text-center">
            <form onSubmit={handleSubmit}>
                Title: <input onChange={handleChange}  type="text" name='title' /><br /><br />
                Post: <input onChange={handleChange} type="text" name='body' /><br /><br />
                <button className="btn btn-primary">Submit</button>
                <button onClick={deletePost} className="btn btn-primary">Delete</button>
                <div className="container">
                    {/* <h1>{post.title}</h1> */}
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Blog
