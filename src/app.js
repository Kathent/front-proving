const React = require('react');
const ReactDom = require('react-dom');
const {Router, Route, Link} = require('react-router');
const ButtonPage = require('./buttons/buttons');

const routers = [{label: 'ButtonPage', path: '/button'}]
const textArr = [1, 2, 3]


class App extends React.Component {
    render() {
        return (
        <div>
            <span>Hello World</span>
            <ul>
                {
                    textArr.map(val=>(
                        <li key={val}>
                            <a href='/'>HAHA</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        )
    }
}

export default App;

function AppRoute() {
    return <Router>
        <Route path='/' component={App}></Route>
    </Router>
}


ReactDom.render(
    <AppRoute/>, document.getElementById('app')
)