import React from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../../../assets/css/Profile.module.css';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
export class Profile extends React.Component  {
  constructor(props){
    super(props)
    this.state={
      editable:false,
      name:this.props.detailsObject.first_name+' '+this.props.detailsObject.last_name,
      email:this.props.detailsObject.email
    }
  }
  onclick=(e)=>{
    console.log("clicked")
    e.preventDefault()
   this.setState({
    editable:!this.state.editable
   })
  }
  
onChange=(e)=>{
this.setState({
 [ e.target.name]:e.target.value
})
}
  render(){
    let {
      image,
      balance_points
    } = this.props.detailsObject;

   
    return (
      <React.Fragment>
        <div className={Styles.profileHeader}>
          <img
            className={Styles.profileImg}
            alt='profile'
            src={image}
          />
        </div>
        <div className={Styles.profileContent}>
          <Grid container>
            <Grid item xs={4}>
              <label className={Styles.label}>Name</label>
              <TextField name="name" id="name" disabled={!this.state.editable} onChange={(e)=>this.onChange(e)} className={Styles.label} value={this.state.name}></TextField>
            </Grid>
            <Grid item xs={4}>
              <label className={Styles.label}>User Id</label>
              <TextField name="email" id="email" disabled={!this.state.editable} onChange={(e)=>this.onChange(e)} className={Styles.label} value={this.state.email}></TextField>
            </Grid>
            <Grid item xs={4}>
              <label className={Styles.label}>Balance Points</label>
              <TextField disabled="false" className={Styles.label} value={balance_points? balance_points: "0"}>0 Points</TextField>
            </Grid>
          </Grid>

        </div>
        {
          !this.state.editable?<Button id="edit" onClick={(e)=>{this.onclick(e)}}>EDIT</Button>:<Button onClick={(e)=>{this.onclick(e)}}> SAVE</Button>
        }
      </React.Fragment>
    );
  }}

export default Profile;