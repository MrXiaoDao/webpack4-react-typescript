import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './index.scss';
console.log('页面刷新'.includes('页面'))
let a = 888;
Array.from(new Set([1, 1, 2, 2, 3]));
const bol = [1, 2, 3, 4].includes(1);
((num) => {
    console.log(num, a)
})(123);
Promise.resolve(123).then(res => {
    console.log(res)
})
new Set();
console.log(Object.assign({}, {name: 'zhangsan'}))
const title = 'min-react-demo asdf asdff 哈哈 呵呵哒苏打粉萨法方式 热对的更撒地方 heheda';

ReactDOM.render(
  <div className="tit">
    {title}
    <p className="parent">
      <span className="child">i am span</span>
    </p>
  </div>,
  document.getElementById('app')
);

const str: string = '123';
console.log(str)

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
const b = Direction.Down;
console.log('b is >', b);
const aaa = {
  name: 'aaa'
}
const obj = {
  ...aaa,
  type: 'object'
}

module.hot.accept(); // 热更新


// "browserslist": [
//   "last 50 Chrome versions",
//   "last 5 Firefox versions",
//   "Safari >= 6",
//   "ie > 8"
// ]