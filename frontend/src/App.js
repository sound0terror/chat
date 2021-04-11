import './App.css';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Route, Switch} from "react-router";

function App() {
  return (
      <>
        <Toolbar/>
        <Switch>
          <Route path="/" component={null}/>
        </Switch>
      </>

  );
}

export default App;
