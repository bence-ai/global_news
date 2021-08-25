import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FilteredNews = ( {language, searchTerm, page} ) => {
    const [news, setNews] = useState([]);
    const url = "https://newsapi.org/v2/everything?q=" + searchTerm + "&pagesize=10" + "&language=" + language + "&page=" + page + "&apiKey=6978740ff320434a9ef38606f359cbb2";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data.articles);
                setNews(res.data.articles);
            })
    }, [url])

    return (
        <div>
            <ul>
            {
            news.map(piece => <li><a key={piece.title} href={piece.url}>{piece.title}</a></li>)
            }
            </ul>
        </div>
    )
}

export default FilteredNews
