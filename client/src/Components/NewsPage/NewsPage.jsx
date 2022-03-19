import React from 'react'
import { Container } from 'react-bootstrap'
import {useEffect, useState} from "react";

function NewsPage() {

  return (
    <Container>
     <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/SneakerNews?ref_src=twsrc%5Etfw">Tweets by SneakerNews</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Container>
  )
}

export default NewsPage