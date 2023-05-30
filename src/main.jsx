// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import Product from "./components/painitings"
import './index.css'
// import {App} from './App.jsx'

ReactDOM.createRoot(document.querySelector("#root"))
    .render(
        <Product 
            imgSrc="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
            imgAlt = "Tacos With Lime"
            imgWidth = "640"
        />
    )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )


