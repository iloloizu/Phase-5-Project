import React from 'react'
// import Shop from '../Shop/Shop'
import Profile from '../Profile Page/Profile'
import Login from '../Profile Page/Login'
import { Timeline } from 'react-twitter-widgets'
import Three from "../Three"


export default function Home() {
  return (
      <div className="home">
        
      <Profile/>
      <br/>
        <div className="organize">
        
          <div id="div1">
            <Three/>
          </div>
          <div id="div2"> 
            <Timeline 
                dataSource={{ sourceType: "profile", screenName: "SneakerNews" }}
                options={{ theme: "dark", width: "400", height: "800" }}
              />
          </div>
        
        </div>
        
      </div>
    
  )
}
