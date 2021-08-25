import './NavigationBar.css'
import { useState } from 'react';
import { Redirect } from "react-router-dom";

const NavigationBar = (props) => {
    // states used to operate the search form
    const [returnToSearch, setReturnToSearch] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    // if the input changed in the seach box, update it here as well
    const handleSearchInputUpdate = (value) => {
        setSearchInput(value);
    }

    // if the form is submitted, first we update the search term in App.js based on the current input,
    //  then redirect to the /search page
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateSearchTerm(searchInput);
        setReturnToSearch(true);
    }

    // generate the date string we display on the left side of the nav bar
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
    
    // in case we searched, we need to redirect the user to /search
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

            {returnToSearch ? <Redirect to="/search" /> : ""}
        </div>
    );
}



export default NavigationBar
