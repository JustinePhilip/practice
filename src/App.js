import React from 'react';
import MyInfo from "./components/MyInfo"
import hiking from './hiking.jpg'

function App() {
  return (
        <div>
            <MyInfo>
              name="Laycon Hafeez"
              imgUrl ={hiking}
           
              
            </MyInfo>
        </div>
  )
}

export default App;
