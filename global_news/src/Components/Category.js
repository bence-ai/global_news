import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Category = () => {
    const [news, setNews] = useState([]);
    const url = "ourapi/news?c=" + useLocation().pathname;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setNews(res);
            })
    }, [url])

    return (
        <div>
            <ul>
            {
            news.map(piece => <li key={piece.id}><a href={piece.url}>{piece.name}</a></li>)
            }
            </ul>
        </div>
    )
}

export default Category
