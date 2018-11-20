import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import App from '../component_/App';
import SayHello from '../component_/SayHello';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class AppRouter extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/app">App</Link>
              </li>
              <li>
                <Link to="/sayHello">SayHello</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/app" component={App} />
          <Route path="/sayHello" component={SayHello} />
        </div>
      </Router>);
  }
}
export default AppRouter; // 导出供其他文件使用