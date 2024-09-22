let x= document.getElementById("Time")
let y= document.getElementById("Date")
setInterval(function(){
    let t=new Date().toLocaleTimeString()    
    let d=new Date().toDateString()
    y.innerText=d 
    x.innerText=t
},1000)

    