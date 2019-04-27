import { getToken } from "./authentication";

function loginRequest({email, password}){
  return new Promise((resolve, reject) => {
    fetch("https://astrola.herokuapp.com/users/login", {
      //fetch("http://localhost:5000/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}
function registerRequest({name,email, password}){
  return new Promise((resolve, reject) => {
    fetch("https://astrola.herokuapp.com/users/register", {
    //fetch("http://localhost:5000/users/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
        
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}
function searchExperiences({location,type}){
  return new Promise((resolve, reject) => {
    fetch("https://astrola.herokuapp.com/experiences/search", {
    //fetch("http://localhost:5000/experiences/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        location,
        type
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
        
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}

function getDashboard(){
  return new Promise((resolve, reject) => {
    fetch("https://astrola.herokuapp.com/dashboard", {
    //fetch("http://localhost:5000/dashboard", {
      headers: {
       'Authorization': getToken() 
      }
    }).then(response => {
      if (!response.ok){
        reject(new Error("Unathorized"));
        return;
      }
      response.json().then(json => {
        resolve(json.data);
      }).catch(e => reject(e));
    }).catch(err => reject(err))
  })
}

export {
  registerRequest,
  loginRequest,
  getDashboard,
  searchExperiences
}