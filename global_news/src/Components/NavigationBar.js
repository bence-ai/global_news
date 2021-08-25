import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div id="nav-bar">
            <div className="nav-elements">
                <h3 id="date">{ getDate() }</h3>
            </div>
            <div className="nav-elements">
                <h3 id="price">{ getTime() }</h3>
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

const getTime = () => {
    var date = new Date(),
        hours = '' + (date.getHours()),
        minutes = '' + date.getMinutes(),
        seconds = date.getSeconds();

    if (hours.length < 2) 
        hours = '0' + hours;
    if (minutes.length < 2) 
        minutes = '0' + minutes;
    if (seconds.length < 2) 
        seconds = '0' + seconds;

    return [hours, minutes, seconds].join(':');
}

export default NavigationBar
