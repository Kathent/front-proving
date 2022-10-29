import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import ButtonsPage from './components/buttons/buttons';
import BoxPage from './components/layouts/box';
// const {makeStyles} = require('@material-ui/core');

const routers = [{ label: "ButtonPage", path: "/button", component: ButtonsPage}, 
                 {label: "BoxPage", path:"/box", component: BoxPage}];

const useStyles = {
  navLi: {
    float: "left",
    listStyleType: "none",
    margin: "20px",
    padding: "20px",
    fontSize: "10px",
  },
  div: {
    width: "100%",
    height: "100%",
  },
  ul: {
    width: "100%",
    height: "100%",
    display: "inline-block",
  },
};

function About(props) {
return <h2>{props&&props.name||'About'}</h2>
}

class App extends React.Component {
  render() {
    console.log(BoxPage)
    return (
      <BrowserRouter>
        <div style={useStyles.div}>
          <ul style={useStyles.ul}>
            <li style={useStyles.navLi}>
              <Link to="/">Home</Link>
            </li>
            <li style={useStyles.navLi}>
              <Link to="/about">About</Link>
            </li>
            {routers.map((val) => (
              <li style={useStyles.navLi}>
                <Link to={val.path}>{val.label}</Link>
              </li>
            ))}
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {
              routers.map((val)=>(
                <Route path={val.path} component={val.component}/>                  
              ))
            }
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
