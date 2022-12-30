import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

function Update() {
  const [book, setBook] = useState({
    tile: "",
    description: "",
    price: null,
    cover: "",
  })

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:8000/books/" + bookId, book)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='form'>
      <h1>Update New Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='description' onChange={handleChange} name='description' />
      <input type="number" placeholder='price' onChange={handleChange} name='price' />
      <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
      <button onClick={handleClick}>Edit</button>
    </div>
  )
}

export default Update