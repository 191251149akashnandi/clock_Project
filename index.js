setInterval(function() {

    var d = new Date();
    var hTime = d.getHours();
    var mTime = d.getMinutes();
    var sTime = d.getSeconds();
    var hRotation = 30*hTime + mTime/2;
    var mRotation = 6*mTime;
    var sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

},1000);