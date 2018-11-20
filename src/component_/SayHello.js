import React, {Component} from "react";
import Hello from "./Hello";

class SayHello extends Component {

  constructor() { // 构造函数, 只用来初始化值
    super();
    this.state = { // 当前组件的属性集合
      showName: 'React' // 新建 showName = 'React'
    };
  }

  render() { // render() 绘制方法, 绘制下方return()返回的JSX组件

    return ( // return 返回的就是一个JSX, 一个组件
      <div>
        <Hello sayName={this.state.showName}/>
        <p>
          开始编辑去见证魔法的诞生 :)
        </p>
      </div>
    );
  }

}

export default SayHello;