import React, { Component } from 'react'
import './ConfirmPage.css'
import Paper from './Paper'
import TabContainer from './TabContainer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
//   dense: {
//     marginTop: 16,
//   },
//   menu: {
//     width: 200,
//   },
// }));
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class ConfirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
    emailIsValid:false
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.validateEmail = this.validateEmail.bind(this);
  }

  
  handleSubmit(event){
    // this.state.value

    //set loading
    const datae = new FormData();
  datae.append('newid', this.props.exportCode)
  datae.append('email', this.state.value)
  let theLink = this.props.link+'/'+this.props.id
  // let theURL = ""
  fetch(theLink,{
    method: "POST",
    body: datae
}).then(function(response) {
    return response.json();
  })
  .then((myJson)=> {
    this.props.setFinishExporting()
  }).catch(function (error) {
        // handle error
        console.log(error);

      this.props.changeValue(1)
    this.props.setFinishExporting()
      })

      this.props.setExporting()
      this.props.changeValue(3)
    
  }
  handleChange(event) {

    // if (validateEmail(event.target.email)) {
    //   alert(event.target.email)
    // }

    // alert('A name was submitted: ' + event.target.value);
    this.setState({
      value: event.target.value,
      emailIsValid: validateEmail(event.target.value)
    });
    event.preventDefault();
  }
  render() {

  // const classes = useStyles();
    return (
      <TabContainer>
      <Paper header="Please Enter Your Email Address:" 
      
      // className='emailpaper'
      >
        
         <br></br>
      {/* <Paper > */}
      {/* // header={sthis.props.exportCode} */}
          
             <TextField
        id="outlined-full-width"
        label="Email Address"
        style={{ margin: 8 }}
        placeholder="Email Address"
        // helperText="Full width!"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        required
        type="email"

        value={this.state.value} 
        onChange={this.handleChange}
        
      >
        
      
</TextField>

<Button disabled={!this.state.emailIsValid}
    fullWidth variant="contained" color="primary" className='button-new' onClick={this.handleSubmit}>
        
  Submit
</Button><>
        </>

        </Paper>
        
      {/* </Paper> */}
      </TabContainer>
    )
  }
}

export default ConfirmPage
