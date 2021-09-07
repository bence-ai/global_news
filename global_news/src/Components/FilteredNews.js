import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const A = styled.a`
    text-decoration: none;
    color: #f1ffff;
    font-size: 30px;
`;

const Button = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #f1ffff;
    border-radius: 10px;
    color: #f1ffff;
    height: 45px;
    width: 100px;
    margin-left: 43px;
    font-size: 20px;
    &:hover {
        background-color: #222222;
    }
`;

const Button2 = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #f1ffff;
    border-radius: 10px;
    color: #f1ffff;
    height: 45px;
    width: 100px;
    margin-left: 7px;
    font-size: 20px;
    &:hover {
        background-color: #222222;
    }
`;

const Li = styled.li`
    background-color: #222222;
    padding: 12px;
    display: block;
    align-items: center;
    justify-content: center;
    min-height: 90px;
    height: 20%;
    border-radius: 10px;
    text-align: center;
    margin-top: 20px;
    margin-right: 43px;
    color: #f1ffff;
`;

const FilteredNews = ( {language, searchTerm} ) => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const url = "https://newsapi.org/v2/everything?q=" + searchTerm + "&pagesize=10&language=" + language + "&page=" + page + "&apiKey=faad73f4c2ea4060b5f47d0867ee3a23";

    const nextPage = useCallback(() => {
        setPage(page > 5 ? 6 : page + 1);
    }, [page])

    const prevPage = useCallback(() => {
        setPage(page > 1 ? page - 1 : 1);
    }, [page])
    
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setNews(res.data.articles);
            })
    }, [url])

    return (
        <div>
            <Button onClick={prevPage}>Prev</Button>
            <Button2 onClick={nextPage}>Next</Button2>
            <ul>
            {
            news.map(piece => <Li key={piece.title}><A href={piece.url}>{piece.title}</A></Li>)
            }
            </ul>
        </div>
    )
}

export default FilteredNews
