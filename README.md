
### react-demo

---

#### deployed website
 - https://littleostar-react.github.io/react-demo/

#### react
 - https://reactjs.org/
 - https://facebook.github.io/create-react-app/
 - https://reacttraining.com/react-router/web

#### hello wrold, component of 3 ways

```
import React from 'react';
```
// 1, function less
```
export default ({name}) => <h1>Hello {name}!</h1>;
```
// 2, function
```
export default function({ name }) {
  return <h1>Hello {name}!</h1>
};
```
// 3, class
```
class Hello extends React.Component { // --> SayHello.js 15 line be used

  render() {
    const name = this.props.sayName; // get host prop --> "sayName" and set value to "name"

    return ( // return JSX component
      <h1>Hello {name}!</h1> // {name} --> const name
    );
  }
}
export default Hello;
```

---

#### exists probelm

 - https://littleostar-angular.github.io/react-demo/about
   - get 404

---

end
