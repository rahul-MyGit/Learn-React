// import './App.css'

// function App() {

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
//       <figure className="bg-slate-100 rounded-xl p-8 md: dark:bg-slate-800 md:flex">
//       <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/1307655/pexels-photo-1307655.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512" />
//       <div className="pt-6 space-y-4 md:p-8 text-center md:text-left">
//         <blockquote>
//           <p className="text-lg font-medium">
//             “Tailwind CSS is the only framework that I have seen scale
//             on large teams. It’s easy to customize, adapts to any design,
//             and the build size is tiny.”
//           </p>
//         </blockquote>
//         <figcaption className="font-medium">
//           <div className="text-sky-500 dark:text-sky-400">
//             Sarah Dayan
//           </div>
//           <div className="text-slate-700 dark:text-slate-500">
//             Staff Engineer, Algolia
//           </div>
//         </figcaption>
//       </div>
//     </figure>
//     </>
//   )
// }

// export default App

import Card from './components/Card'
import './App.css'

function App() {

  // let myObj = {
  //   username : "Rahul",
  //   age : 21
  // }
  // let newArr = [1,2,3,4]

  return (
    <>
       <h1 className='bg-green-400 text-black p-4 
       rounded-xl mb-4'>Tailwind test</h1>
       <Card username="Chai or Code" btnText="click me"/>
       <Card username= "Rahul" />
    </>
  )
}

export default App
