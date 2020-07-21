var button=document.querySelector('.submit');
var input =document.querySelector('.inputValue');
var main=document.querySelector('#name');
var des=document.querySelector('.desc');
var temp=document.querySelector('.temp');

button.addEventListener('click',function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50b212b2a9ff6ba27f849efded26eeb2&units=metric')
.then(response => response.json())
.then(data => {
    var nameValue=data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    main.innerHTML=nameValue;
    des.innerHTML="Description: "+descValue;
    temp.innerHTML="Temperature: "+tempValue+" &#176;C";
    input.value="";
})
.catch(err=>alert("Wrong City Name!"));
});
