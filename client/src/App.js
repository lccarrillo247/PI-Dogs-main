import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './views/landing/landing';
import './App.css';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import Create from './views/create/create';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/create" component={Create}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
