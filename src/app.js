console.log('hello app')
import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

const container = document.getElementById("container")
const myVnode1 = h('a', {
  key: 'a',
  props: {
    target: '_blank',
    href: 'https://www.baidu.com'
  }
}, "测试链接")
console.log(myVnode1)
patch(container, myVnode1)