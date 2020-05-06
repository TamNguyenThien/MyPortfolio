import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
  render () {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/67803466_1091181307740592_3648681628277932032_n.jpg?_nc_cat=108&_nc_ohc=s85wWkkCed8AX8bdRjP&_nc_ht=scontent.fvca1-1.fna&oh=8d3d0ac98be7c1c96959e7a8b996dead&oe=5EB4C6BC'
              alt='avatar'
              className='avatar-img'
            />

            <div className='banner-text'>
              <h1>Front-End Web Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

              <div className='social-links'>

                {/* LinkedIn */}
                <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* Github */}
                <a href='http://facebook.com' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-facebook-square' aria-hidden='true' />
                </a>

                {/* Freecodecamp */}
                <a href='http://gmail.com' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-free-code-camp' aria-hidden='true' />
                </a>

                {/* Youtube */}
                <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-youtube-square' aria-hidden='true' />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
