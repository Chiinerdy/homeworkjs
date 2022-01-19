let time = document.querySelector('.time');
let greeting = document.querySelector ('.greeting');
let myname = document.querySelector ('.myname');
let myfocus = document.querySelector ('.myfocus');

function showTime() {
    let today = new Date();
    //    console.log(today);
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    //output time
    time.innerTexT = `${hour}:${minute}:${addZero(second)}`;
    setTimeout(showTime, 1000);
};

function addZero(second) {
    if (second <10) {return'0' + second} else { return second};
};
}
//setBackground
function setBackground () {
    let today = new Date ();
    let hour = today.getHours ();
    console.log(hour);
document.body.style.backgroundImage= "url('./images/wp2448337.png')";
};
myname.addEventListener('keydown', setName);
function setName(event) {
    console.log (event);
}





    
};
showtime ();
setBackground ();
getName ();