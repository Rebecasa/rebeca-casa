import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Music = () => (
  <Layout>
  <div className="music">
  <h2>More Sleep</h2>
   <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/253572245&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
  <div className="cover-letter">
  <h2>Cover letter</h2>
  <p>
  As somebody who has developed very quickly under working closely with colleagues much
more senior than myself (in this case, two Michelin star restaurants as a young, ambitious chef) this opportunity was a really exciting prospect for me.
<br/>
Although I have developed effective skills in JavaScript, Rails & React, I am humble enough to recognise the fact that I still have a lot to learn as a developer, so would relish the opportunity to really work closely with more senior developers
<br/>
Diverse projects, paired programming & a clear prioritisation of helping team members develop is a huge attraction to me & an opportunity I would love to take up.
<br/>
My experience at the highest level in cuisine - as well as the ability to work under intense
pressure, act calm & be resourceful, as well as work very closely as part of a time - is a unique aspect of my experience that I could bring to the team.
</p></div>
</div>
  </Layout>
)

export default Music
