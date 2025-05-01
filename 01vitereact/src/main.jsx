import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js '
import App from './App.jsx'




  // we can also write App() instead of <App/> because App is a funtion and it can be called like that
  /*
  
    React converts the html tags into the object of key value pair and uses it as a tree like structure
    it converts html into something like this :
    const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

  yeh aik object hy or object ko humesha us k name sy exectue krty hain , 
  lekin agr hum is object ko App() ki jagh exeute krain to nhi hoga q k jo html to object converter hy woh koi specific 
  syntax expect krta hy. 
  but we can use the that thing
  lekin usy bhi usy krty huye <strict Mode> waly ko lazmi hatana verna woh nhi chaly ga 

  aik 3rd tareeka bhi hy usko react sy bnaty hain
  or ariables jo declared hoty hain to woh third method ma text k baad inject hoty hain 
  or isko babel inject krta hy 

  */

// this thing
const reactElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)
//3rd tareeka
const name = 'Monkey D. Luffy'
const thirdMethod = React.createElement(
  'a',
  {href:'https://www.instagram.com/',target:'_blank'},
  'click me to go to instagram',
  name
)


  createRoot(document.getElementById('root')).render(   



    
  thirdMethod
  
  
)
