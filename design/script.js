let current_ip = document.getElementById('currentip');
let current_town = document.getElementById('currenttown');
let current_zone = document.getElementById('currentzone');
let current_isp = document.getElementById('currentisp');

const entered_ip = document.querySelector('.Search_bar');
const search_btn = document.querySelector('.search_btn');

const api_key = 'YOUR_API_KEY'; // Replace with your actual API key

const map = L.map('MAPDISPLAY', {
  center: [0, 0],
  zoom: 0,
  layers: [
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
  ]
});

const updateMarker = (update_marker = [-33.665, 18.993]) => {
  map.setView(update_marker, 13);
  L.marker(update_marker).addTo(map);
};

const getIPDetails = (default_ip) => {
  let ip_url;
  if (default_ip === undefined) {
    ip_url = `https://api.ipapi.com/check?access_key=${api_key}`;
  } else {
    ip_url = `https://api.ipapi.com/${default_ip}?access_key=${api_key}`;
  }
  fetch(ip_url)
    .then(response => response.json())
    .then(data => {
      current_ip.innerHTML = data.ip;
      current_town.innerHTML = `${data.city}, ${data.region}, ${data.country} ${data.postal}`;
      current_zone.innerHTML = data.timezone;
      current_isp.innerHTML = data.isp;

      // update map marker
      updateMarker([data.latitude, data.longitude]);
    })
    .catch(error => {
      alert("Unable to get IP details");
      console.log(error);
    });
};

document.addEventListener('DOMContentLoaded', () => {
  updateMarker();
});

search_btn.addEventListener('click', e => {
  e.preventDefault();
  if (entered_ip.value.trim() !== '') {
    getIPDetails(entered_ip.value);
  } else {
    alert("Please enter a valid IP address");
  }
});
