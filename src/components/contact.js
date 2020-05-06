import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
  render () {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Tam Nguyen</h2>
            <img
              src='https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/67803466_1091181307740592_3648681628277932032_n.jpg?_nc_cat=108&_nc_ohc=s85wWkkCed8AX8bdRjP&_nc_ht=scontent.fvca1-1.fna&oh=8d3d0ac98be7c1c96959e7a8b996dead&oe=5EB4C6BC'
              alt='avatar'
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    (082) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className='fa fa-fax' aria-hidden='true' />
                    (028) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className='fa fa-envelope' aria-hidden='true' />
                    someone@email.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className='fa fa-skype' aria-hidden='true' />
                    MySkypeID
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
