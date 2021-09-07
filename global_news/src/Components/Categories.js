import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const url = "ourapi/categories";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setCategories(res);
            })
    }, [url])

    return (
        <div>
            <ul>
            {
            categories.map(category => <li key={category.id}><a href={category.name}>{category.name}</a></li>)
            }
            </ul>
        </div>
    )
}

export default Categories
