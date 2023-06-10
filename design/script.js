
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
  
        fetch('http://api.ipstack.com/' + ipAddress + '?access_key=YOUR_API_KEY')
          .then(response => response.json())
          .then(data => {
            const latitude = data.latitude;
            const longitude = data.longitude;
  
            
            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }
  
  
  fetchLocation();
  





