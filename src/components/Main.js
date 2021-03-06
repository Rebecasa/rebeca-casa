import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            2 years working in Michelin Star restaurants taught me a lot - how
            to deal with intense stress, tight deadlines & how to work in a
            team.
            <br />
            <br />
            Technology has always interested me & I love to challenge myself,
            <br />
            so decided to switch to programming back in 2018 & have never looked
            back.
            <br />
            <br />
            I now live in London, working as a Full-Stack Developer with around
            2 years
            <br />
            experience, working for multiple companies in Berlin
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            <strong>Full stack Developer, heycater! - Berlin, Germany </strong>
            <br />
            11/2019 - Present
            <br />
            I currently work as a Full-Stack Developer with a focus on React, as
            well as handling some backend tasks using Ruby. My main interests
            are integrating existing UI frameworks with our backend logic to
            build something that delights our customer base.
            <br />
            <br />
            <strong>
              Front end developer - Internship, Blindside - Berlin, Germany{' '}
            </strong>
            <br />
            06/2019 -09/2019
            <br />
            At Blindside, I learnt how to effectively collaborate on a complex,
            large-scale engineering project, working closely with the CTO and
            other experienced developers on a React health app. Specifically, I
            contributed to several pull requests each day, mainly focused on
            user stories related to React, SCSS & some Redux.
            <br />
            <br />
            <strong>
              Front end developer - Internship, Landaio - Berlin, Germany{' '}
            </strong>
            <br />
            03/2019 -05/2019
            <br />
            Technical lead in an early stage startup, working closely with the
            founders to set up data analytics, A/B testing & a new Reactbased
            web platform.
            <br />
            <br />
            <strong>
              Front end developer - Internship, Scribe App - Berlin, Germany{' '}
            </strong>
            <br />
            12/2018 - 02/2019
            <br />
            I took the initiative to work with the founders on a new React
            project to gain some product development & React experience after
            finishing the Le Wagon programming course.
            <br />
            <br />
            <strong>Owner, Baersilien Cafe - Berlin, Germany </strong>
            <br />
            01/2018-01/2019
            <br />
            Responsible for the menu, marketing, events & finances of a family
            business in Berlin, requiring creativity & application of my
            business skills in a new environment to grow revenue.
            <br />
            <br />
            <strong>
              Chef de Partie, L’ecrivain Restaurant - Dublin, Ireland{' '}
            </strong>
            <br />
            09/2015 - 04/2017
            <br />
            Delivering Michelin-star quality meals in a renowned Dublin
            restaurant in a variety of roles & teams.
            <br />
            <br />
            <strong>
              Culinary Extern, Thornton’s Restaurant - Dublin, Ireland
            </strong>
            <br />
            04/2015 - 09/2015
            <br />
            Working across different teams new, complex dishes delivered to a
            high standard under intense time pressure.
            <br />
            <br />
            <strong>Finance Manager, Transrebeca - Sao Paulo, Brazil</strong>
            <br />
            01/2009 - 12/2012
            <br />
            Joint management of company finances in a family company in Brazil.
            Responsible for the company's income & outgoings.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <ul>
            <li>
              <a href="http://www.baersilien.com/">Bärsilien</a>
            </li>
            <li>
              <a href="http://www.pimpyourprint.tech/">Pimp your print</a>
            </li>
            <li>
              <a href="http://toylandia.herokuapp.com/">Toylandia</a>
            </li>
            <li>
              <a href="https://rebeca-cocktails.herokuapp.com/">
                Mr. Cocktails
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="mailto:rebecabscs@gmail.com"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rebeca-casa-859553176/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Rebecasa" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
