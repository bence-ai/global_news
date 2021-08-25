import NavigationBar from './Components/NavigationBar.js'
import Homepage from './Components/Homepage'
import FilteredNews from './Components/FilteredNews';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [country, setCountry] = useState("hu")

  const updateSearchTerm = (value) => {
    setSearchTerm(value);
  }

  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar updateSearchTerm={updateSearchTerm}/>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/search" render={(props) => (<FilteredNews language={country} searchTerm={searchTerm} />)} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
