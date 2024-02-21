import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
    <h3>Raat ho gye hai</h3>
    </>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
const anotherUser = " main new hu";
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

const newElement = (
  <a href="https://google.com" target='_blank'> Press To GO </a>
  )

ReactDOM.createRoot(document.getElementById('root')).render(
    
  <App />
)
