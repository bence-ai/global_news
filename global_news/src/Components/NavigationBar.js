import './NavigationBar.css'
import { useState } from 'react';
import { Redirect } from "react-router-dom";

const NavigationBar = (props) => {
    const [returnToSearch, setReturnToSearch] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateSearchTerm(searchInput);
        setReturnToSearch(true);
    }

    const handleSearchInputUpdate = (value) => {
        setSearchInput(value);
    }
    
    if (returnToSearch) {
        return <Redirect to="/search" />
    }
    return (
        <div id="nav-bar">
            <div className="nav-elements">
                <h3 id="date">{ getDate() }</h3>
            </div>
            <div className="nav-elements">
                <br/>
                <form onSubmit={handleSubmit}>
                    <input className="search" type="text" placeholder="Search..." value={props.searchInput} onChange={e => handleSearchInputUpdate(e.target.value)} />
                </form>
            </div>
            <h1 id="name"><a href="/">GLOBAL NEWS</a></h1>
            <hr/>
        </div>
    );
}

const getDate = () => {
    var date = new Date(),
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export default NavigationBar
