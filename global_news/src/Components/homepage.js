import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

function MainNewsList() {
    const Main = styled.div`
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 32px;
        border: 1px solid transparent;
        border-top: 1px solid #433b1e;
        border-bottom: 1px solid #DADCE0;
        overflow: hidden;
        background-color: #433b1e;
    `;

    const Li = styled.li`
        background-color: #222222;
        padding: 12px;
        padding-left: 19px;
        display: block;
        align-items: center;
        justify-content: center;
        min-height: 90px;
        height: 20%;
        border-radius: 10px;
        margin-top: 20px;
        color: #f1ffff;
    `;

    const Card = styled.div`
        position: relative;
        z-index: 2;
        padding: 16px 0;
        background-color: #433b1e;
        margin-left: 30px;
        grid-row: 1 / span 2;
    `;

    const Card2 = styled.div`
        position: relative;
        z-index: 2;
        padding: 16px 37px 0 0;
        background-color: #433b1e;
        grid-column: 2 / span 2;
        margin-bottom: 10px;
        border-left: 3px solid #433b1e;
    `;

    const A = styled.a`
        text-decoration: none;
        color: #f1ffff;
    `;

    const Img = styled.img`
        width: 50%;
        height: auto;
    `;

    const [mainNews, setMainNews] = useState([]);
    const [leftBar, setLeftbar] = useState([]);
    const url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6978740ff320434a9ef38606f359cbb2&pagesize=39"
    const urlLeft = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6978740ff320434a9ef38606f359cbb2&pagesize=10";

    useEffect(() => {
       axios.get(urlLeft)
        .then(res => {
            setLeftbar(res.data.articles)
            
        })
    }, [urlLeft])

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMainNews(res.data.articles);
            })
    }, [url])
    
    return(
        <Main>
            <Card>
                <div>
                    {
                    mainNews.map(news => <Li key={news.title}> <A href={news.url}> {news.title != null ? news.title : news.description }</A></Li>)
                    }
                </div>
            </Card>
            <Card2>
                <div>
                    {
                    leftBar.map(news =>
                                <Li key={news.title}> <h3><A href={news.url}>{news.title}</A></h3>
                                {news.urlToImage !== null ? <Img alt="" src={news.urlToImage}/> : ""}
                                <p>{news.description}</p>
                                <span>{news.publishedAt.replace("T", " ").replace("Z", "").replaceAll("-", "/")}</span>
                                </Li>)
                    }
                </div>
            </Card2>
        </Main>
    )
}

export default MainNewsList;