import React from 'react'
import { Container } from 'react-bootstrap'
import { Timeline } from 'react-twitter-widgets'
// import {useEffect, useState} from "react";

function NewsPage() {

  return (
    <Container>
      <Timeline dataSource={{ sourceType: "profile", screenName: "SneakerNews" }} />
  
    </Container>
  )
}

export default NewsPage