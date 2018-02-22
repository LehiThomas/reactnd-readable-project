//import axios from 'axios';

const api = 'http://localhost:3001'

let token = window.localStorage.token;
if (!token)
  token = window.localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const getCategories = () => {
  fetch(`${api}/categories`, { headers })  
    .then(res => res.json())
    .then(data => console.log(data.categories))
  	.catch(err => console.log(err))
}

