


   function showDate(){
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();

    document.querySelector(".date").innerHTML=date.toLocaleString();
    document.querySelector(".second").style=`transform:rotate(${6*second}deg)`
    document.querySelector(".minute").style=`transform:rotate(${6*minute}deg)`
    document.querySelector(".hour").style=`transform:rotate(${30*hour+minute/2}deg)`
   }
   showDate();
   setInterval(showDate);