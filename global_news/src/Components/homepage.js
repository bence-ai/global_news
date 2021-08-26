import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';

function MainNewsList() {
    const Main = styled.div`
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 32px;
        border: 1px solid transparent;
        border-top: 1px solid #DADCE0;
        border-bottom: 1px solid #DADCE0;
        overflow: hidden;
        background-color: #E3E7F1;
    `;

    const Li = styled.li`
        background-color: whitesmoke;
        padding: 12px;
        display: block;
        align-items: center;
        justify-content: center;
        min-height: 90px;
        height: 20%;
        border-radius: 10px;
    `;

    const Card = styled.div`
        position: relative;
        
        z-index: 2;
        padding: 16px 0;
        background-color: #E3E7F1;
        grid-row: 1 / span 2;
    `;

    const Card2 = styled.div`
        position: relative;
        
        z-index: 2;
        padding: 16px 37px 0 0;
        background-color: #E3E7F1;
        grid-column: 2 / span 2;
        border-left: 3px solid whitesmoke;
    `;

    const A = styled.a`
        text-decoration: none;
        color: black;
    `

    const [mainNews, setMainNews] = useState([]);
    const [leftBar, setLeftbar] = useState([]);
    const url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6978740ff320434a9ef38606f359cbb2&pagesize=10"
    const urlLeft = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6978740ff320434a9ef38606f359cbb2";

    useEffect(() => {
       axios.get(urlLeft)
        .then(res => {
            setLeftbar(res.data.articles)
            
        })
    }, [urlLeft])
    console.dir(mainNews);
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
                    mainNews.map(news => <Li key={news.title}> <A href={news.url}>{news.title}</A></Li>)
                    }
                </div>
            </Card>
            <Card2>
                <div>
                    {
                    leftBar.map(news => <Li key={news.title}> <h3><A href={news.url}>{news.title}</A></h3><br/>
                               <p>{news.content}</p>
                               <p>{news.description}</p>
                               <span>{news.publishedAt}</span>
                                </Li>)
                    }
                </div>
            </Card2>
        </Main>
    )
}

export default MainNewsList;