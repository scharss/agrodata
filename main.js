function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    var lat= position.coords.latitude;
    var long= position.coords.longitude;
    console.log(lat);
    console.log(long);
  
  
  
              //**********************************************
          var map = L.map('mapContainer').setView([lat,long ], 15);
  
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
  
      
      
      
      
  
  
      var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +long+ "&appid=0bda5bdbd55843f5716ea9febd9f26a7" ;
  
  
            //***************************fetch*******************
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      
    //var  clima = myJson.weather[0].main;
    //document.getElementById("demo12").innerHTML = clima;
      
      //console.log(clima);

      
       
      var ciudad = myJson.name;
      document.getElementById("demo3").innerHTML = ciudad;
  
  
      var coordenx = myJson.coord.lat;
      var coordeny = myJson.coord.lon;
      document.getElementById("demo4").innerHTML ="Lat " +coordenx + " "+"Lon " + coordeny;
      //document.getElementById("demo5").innerHTML = coordeny;
  
  
  
       var humedad = myJson.main.humidity;
       document.getElementById("demo").innerHTML = humedad +" %";
       
      var y = myJson.main.temp_max;
      
      var z = y - 273.15;
      
      console.log(y);
      console.log(z);
     //document.getElementById("demo2").innerHTML = z;
  
  
  
     var tempmin = myJson.main.temp_min;
  
     var w = tempmin - 273.15; 
     //document.getElementById("demo6").innerHTML = w;
     
     var temp = myJson.main.temp;
     var t = temp - 273.15;
     document.getElementById("demo7").innerHTML = t+ " Cº";
  
  
  var presion = myJson.main.pressure;
  document.getElementById("demo8").innerHTML = presion+" mbar";
  
  var velocidaddelviento = myJson.wind.speed;
  
  console.log(velocidaddelviento);
  document.getElementById("demo9").innerHTML = velocidaddelviento+ " Km/h";

//***************Salida del sol**************** */
  var salidasol = myJson.sys.sunrise;
  console.log(salidasol);

  // Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(salidasol*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  
  console.log(formattedTime);
  document.getElementById("demo13").innerHTML = formattedTime;

 //***************Fin salida del sol**************** */ 


 var puestasol = myJson.sys.sunset;
 console.log(puestasol);
 // Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(puestasol*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime2 = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  
  console.log(formattedTime2);
  document.getElementById("demo14").innerHTML = formattedTime2;






  
       /*document.getElementById("demo2").innerHTML = y;*/
      
    });
  
    
    
              //********************************fin_fetch****************************************
  
            
             
              L.marker([lat,long ]).addTo(map)
      .bindPopup('Aca estoy');
      //.openPopup();
  

     

    
           
      
            
            
            }


            