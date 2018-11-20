
### react-demo

---

#### 当前项目已部署
 - https://littleostar-angular.github.io/react-demo/

#### react官方网站
 - https://reactjs.org/
 - https://facebook.github.io/create-react-app/
 - https://reacttraining.com/react-router/web

#### hello wrold, 组件的三种写法

```
import React from 'react';
```
// 第一种写法, function省略写法
```
export default ({name}) => <h1>Hello {name}!</h1>;
```
// 第二种写法, function写法
```
export default function({ name }) {
  return <h1>Hello {name}!</h1>
};
```
// 第三种写法, 类写法
```
class Hello extends React.Component { // --> SayHello.js 第15行被使用

  render() { // render() 绘制
    const name = this.props.sayName; // 获取宿主属性"sayName"并赋值给"name"

    return ( // 返回JSX组件
      <h1>Hello {name}!</h1> // {name} => 上面声明的name属性
    );
  }
}
export default Hello;
```

---

#### 存在问题

 - https://littleostar-angular.github.io/react-demo/about
   - 一刷新就404

---

end