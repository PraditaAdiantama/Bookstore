import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
  const [book, setBook] = useState({
    tile: "",
    description: "",
    price: null,
    cover: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/books", book)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='form'>
      <h1>Sell New Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='description' onChange={handleChange} name='description' />
      <input type="number" placeholder='price' onChange={handleChange} name='price' />
      <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default Add