var url = 'https://geo.ipify.org/api/v1?apiKey=at_PmSrnqfyNq69g0M4gaBNJYPGGkI4a&ipAddress=192.212.174.101';

fetch(url)
    .then((response) =>
        response.json().then((data) => {
            console.log(data);
            document.querySelector('.ip').innerHTML = data.ip;
            document.querySelector('.loc').innerHTML = data.location.city +', '+ data.location.postalCode;
            document.querySelector('.time').innerHTML = 'UTC '+ data.location.timezone;
            document.querySelector('.isp').innerHTML = data.isp;
        })
    )