
let current_ip = document.getElementById('current_ip')
let current_town = document.getElementById('current_town')
let current_zone = document.getElementById('current_zone')
let current_isp = document.getElementById('current_isp')


const entered_ip = document.getElementById('Search_bar') 
const search_btn = document.getElementById('search_btn')

function fetchLocation() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
  
      })
      .catch(error => console.log(error));
  }
  
  
  fetchLocation();
  





