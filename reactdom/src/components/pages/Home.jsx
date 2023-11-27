import React, { useEffect, useState } from 'react'
import "../../App.scss"
import { Link, useParams } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await fetch("http://localhost:3000/product")
        const jsonData = await response.json()
        setData(jsonData)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='cards'>
            {data && data.map((item) => (
                <ul key={item.id}>
                    <li><img src={item.image} alt="" /></li>
                    <li>{item.name}</li>
                    <Link to={`/${item.id}`}><button>Rehim</button></Link>
                </ul>
            ))}
        </div>
    )
}

export default Home