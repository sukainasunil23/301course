import React from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../../../assets/css/Profile.module.css';
import Paper from '@material-ui/core/Paper';

const Profile = (props) => {
    let {
      email,
      first_name,
      last_name,
      image,
      balance_points
    } = props.detailsObject;
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
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <label className={Styles.label}>Name</label>
              <label className={Styles.label}>User Id</label>
              <label className={Styles.label}>Balance Points</label>
            </Grid>
            <Grid item xs={8}>
              <Paper className={Styles.profileValues}>{first_name} {last_name}</Paper>
              <Paper className={Styles.profileValues}>{email}</Paper>
              <Paper className={Styles.profileValues}>{balance_points} Points</Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }

export default Profile;
