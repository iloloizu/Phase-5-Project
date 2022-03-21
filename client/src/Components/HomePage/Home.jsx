import React from 'react'
// import Shop from '../Shop/Shop'
import Profile from '../Profile Page/Profile'
import Login from '../Profile Page/Login'
import { Timeline } from 'react-twitter-widgets'


export default function Home() {
  return (
    <div>
      <Profile/>
      <Login/>
      <Timeline
        dataSource={{ sourceType: "profile", screenName: "SneakerNews" }}
        options={{ theme: "dark", width: "400", height: "600" }}
      />
      </div>
  )
}
