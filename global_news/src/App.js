import NavigationBar from './Components/NavigationBar.js'
import Homepage from './Components/Homepage'
import FilteredNews from './Components/FilteredNews'
import Categories from './Components/Categories'
import Category from './Components/Category'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { useState } from 'react'

function App() {
  // values we will search based on
  const [searchTerm, setSearchTerm] = useState("")
  const [country, setCountry] = useState("")

  //!! Warning:
  // Updating these will cause to search (request) again immidietly!
  // When handling user input, you should use local fields (see searchInput for example in NavigationBar.js),
  // and only update these, once the user has pressed enter to start their actual search
  //   update the search term
  const updateSearchTerm = (value) => {
    setSearchTerm(value);
  }

  //   update the search country
  const updateSearchCountry = (value) => {
    setCountry(value);
  }

  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar updateSearchTerm={updateSearchTerm}/>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/categories" component={Categories} />
            <Route path="/category" component={Category} />
            <Route path="/search" render={() => (<FilteredNews language={country} searchTerm={searchTerm} />)} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
