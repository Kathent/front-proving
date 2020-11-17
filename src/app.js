const React = require("react");
const ReactDom = require("react-dom");
const { BrowserRouter, Route, Link } = require("react-router-dom");
const ButtonPage = require("./buttons/buttons");

const routers = [{ label: "ButtonPage", path: "/button" }];
const textArr = [1, 2, 3];

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {routers.map((val) => (
              <li>
                <Link to={val.path}>{val.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
