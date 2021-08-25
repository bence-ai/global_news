import Homepage from './Components/Homepage'
import FilteredNews from './Components/FilteredNews';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/search" render={(props) => (<FilteredNews language={'en'} searchTerm={'tesla'} />)} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
