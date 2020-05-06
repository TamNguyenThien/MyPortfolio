import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Skills from './skills'

class Resume extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Cell col={3}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/67803466_1091181307740592_3648681628277932032_n.jpg?_nc_cat=108&_nc_ohc=s85wWkkCed8AX8bdRjP&_nc_ht=scontent.fvca1-1.fna&oh=8d3d0ac98be7c1c96959e7a8b996dead&oe=5EB4C6BC'
                alt='avatar'
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Nguyễn Thiện Tâm</h2>
            <h4 style={{ color: 'grey' }}>OBJECTIVE</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            <p>Working in a professional environment and learn from the experience of your colleagues with specialized programmer.
              So that involve and develop many large projects brings success for the company and achievement for yourself.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
          </Cell>
          <Cell className='resume-right-col' col={9}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName='VNUHCM-University of Science'
              schoolDescription='Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh là một trong những trường đại học đào tạo và nghiên cứu khoa học cơ bản & ứng dụng hàng đầu Việt Nam, trực thuộc Đại học Quốc gia Thành phố Hồ Chí Minh, được xếp vào nhóm trường đại học trọng điểm quốc gia Việt Nam.'
            />

            <hr style={{ borderTop: '2px solid #e22947' }} />

            <h2>Experience</h2>
            <Grid>
              <Cell col={4} style={{ borderRight: '#000 solid 1px' }}>
                <p>2018 - 2019</p>
              </Cell>
              <Cell col={8}>
                <h4 style={{ marginTop: '0px' }}>INNOS Ltd</h4>
                <p>Main responsibilities:</p>
                <p>
                - Analyze a project with draw.io, spreadsheets.
                </p>
                <p>
                - Make Wireframe with Pidoco tool.
                </p>
                <p>
                - Design database structure.
                </p>
                <p>
                - Design UI with Figma tool.
                </p>
                <p>
                - Make a smartPharma appplication, elearning app:
                  <p>
                  + Database: MongoDB.
                  </p>
                  <p>
                  + Backend: built with NestJs, Apollo GraphQL, TypeORM, MongoDB.
                  </p>
                  <p>
                  + Frontend: built with ReactJs, Mobx, Apollo GraphQL, Ant-design, i18n, Webpack, Cypress.
                  </p>
                  <p>
                  - Demo: ''
                  </p>
                </p>
              </Cell>
            </Grid>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>INTERESTS</h2>
            <p>
              Researching technology
            </p>
            <p>
            Teambuilding
            </p>
            <p>
            Outdoor activities
            </p>
            <p>
            Shopping
            </p>
            <p>
            Traveling
            </p>
            <p>
            Movies
            </p>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill='English'
              progress={50}
            />
            <Skills
              skill='Communication'
              progress={90}
            />
            <Skills
              skill='Teamwork'
              progress={90}
            />
            <Skills
              skill='Creativity'
              progress={90}
            />
            <Skills
              skill='Time management'
              progress={80}
            />
            <Skills
              skill='Adaptability'
              progress={90}
            />
            <Skills
              skill='Problem-solving'
              progress={80}
            />
            <Skills
              skill='Office'
              progress={80}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
