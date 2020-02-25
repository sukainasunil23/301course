import { LOGIN, LOGOUT } from "./types";
import log from "loglevel";
import remote from "loglevel-plugin-remote";
import axiosWrapper from "../../../../apis/axiosCreate";
import history from '../../../common/components/history';
import { apiURL } from '../../../../config/constants'

const customJSON = log => ({
  msg: log.message,
  level: log.level.label,
  stacktrace: log.stacktrace
});
remote.apply(log, {
  format: customJSON,
  url: `${apiURL}/log`
});
  log.enableAll();
export const login = object => async dispatch => {
 

  if(object.tokenObj &&object.tokenObj.access_token){
    const {profileObj}=object
    const userData={
      id: `${profileObj.googleId}`,
      email: `${profileObj.email}`,
      first_name: `${profileObj.givenName}`,
      last_name:`${profileObj.familyName}`,
      image:`${profileObj.imageUrl}`,
      balance_points: 0,
      wishlist: [],
      cards_gifted: [],
      cards_received: []
    }
    dispatch ({
      type: LOGIN,
      payload: userData
    });
    log.info(`user [${profileObj.email}] is logged in at [${new Date()}]`);
    window.localStorage.setItem("user",JSON.stringify(userData))
    history.push('/')
  }
  else if(object.email){
    
    const {email,password}=object
    log.info(`user [${email}] tried to login at [${new Date()}]`);
    try{
      const response = await axiosWrapper.get(`/users?email=${email}&last_name=${password}`);  
   
      dispatch ({
        type: LOGIN,
        payload: response.data[0]
      });
      if(response.data.length>0){
       
      window.localStorage.setItem("user",JSON.stringify(response.data[0]))
      history.push('/')
    }
     
    }catch{

      log.error("Server error");
    }
    
  }else{
    log.error("User not found");
  }
  


};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null
  };
};

export const createUser = userDetails => async dispatch => {
  await axiosWrapper.post(`/users`, userDetails);
};