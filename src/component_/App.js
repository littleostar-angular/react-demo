import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

// 类写法
class App extends Component {

  render() { // render() 绘制

    return ( // 返回JSX组件
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App; // 导出供其他文件使用