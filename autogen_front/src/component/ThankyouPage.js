import React, { Component } from 'react'
import './ThankyouPage.css'
import Paper from './Paper'
import TabContainer from './TabContainer'
class ThankyouPage extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {

  // const classes = useStyles();
  const mes = this.props.loading?"Loading....":"Submitted Successfully!! Please wait for our email confirmation!"
    return (
      <TabContainer>
      <Paper header="Thank you!" 
      
      // className='emailpaper'
      >
        <Paper> 
          {mes}

          </Paper>
        </Paper>
        
      </TabContainer>
    )
  }
}

export default ThankyouPage
