import React from 'react';

// 第一种写法, function省略写法
// export default ({name}) => <h1>Hello {name}!</h1>;

// 第二种写法, function写法
/*
export default function({ name }) {
  return <h1>Hello {name}!</h1>
};
*/

// 第三种写法, 类写法
class Hello extends React.Component { // --> SayHello.jslo.js 第15行被使用

  render() {
    const name = this.props.sayName; // 声明宿主属性"name"

    return ( // return JSX
      <h1>Hello {name}!</h1> // {name} => 上面声明的name属性
    );
  }
}

export default Hello;
