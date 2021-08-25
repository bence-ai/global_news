import NavigationBar from './Components/NavigationBar.js'
import Homepage from './Components/Homepage'
import FilteredNews from './Components/FilteredNews';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")
  const [country, setCountry] = useState("hu")

  const handleSearchUpdate = (value) => {
    setSearch(value);
  }

  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar search={search} handleSearchUpdate={handleSearchUpdate}/>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/search" render={(props) => (<FilteredNews language={country} searchTerm={search} />)} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
