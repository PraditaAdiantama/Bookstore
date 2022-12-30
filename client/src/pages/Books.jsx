import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FiTrash } from 'react-icons/fi'
import { TbPencil } from 'react-icons/tb'

function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8000/books")
                setBooks(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8000/books/" + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <h1>Bookstore</h1>
            <div className="books">
                {books.map(book => (
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                        <hr />
                        <div className="menu">
                            <span>${book.price}</span>
                            <div className='menu-btn'>
                                <div className="delete" onClick={() => handleDelete(book.id)}><FiTrash /></div>
                                <div className="edit"><Link to={`/update/${book.id}`} style={{ color:"black" }}><TbPencil /></Link></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className=''><Link to="/add" className='add-book'>Sell Books Now</Link></button>
        </div>
    )
}

export default Books