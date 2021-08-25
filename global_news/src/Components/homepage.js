import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';





function MainNewsList() {
    
    const TopBox = styled.div`
        display: box;
        justify-content: center;
        align-items: center;
        color: blue;
    `;

    const [mainNews, setMainNews] = useState([]);
    const [leftBar, setLeftbar] = useState([]);
    const url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6978740ff320434a9ef38606f359cbb2"
    const urlLeft = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6978740ff320434a9ef38606f359cbb2";

    useEffect(() => {
       axios.get(urlLeft)
        .then(res => {
            setLeftbar(res.data.articles)
        })
    }, [urlLeft])
    console.dir(leftBar);
    console.log("left bar  set");

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.dir(res)
                console.log("before set")
                setMainNews(res.data.articles);
            })
    }, [url])
    console.dir(mainNews);
    console.log("after set");
    
    return(
        
        <div style={{backgroundColor : 'whitesmoke'}} >
            <TopBox>lets see</TopBox>
            <ul>
                {
                mainNews.map(news => <li key={news.source.id}> {news.author}</li>)
                }
            </ul>
        </div>
    )
}
export default MainNewsList;