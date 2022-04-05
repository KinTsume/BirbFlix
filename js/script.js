//This function automatically put a top margin on main-video
//The main-video should have a margin the same value of the NavBar height
window.onload = function changeMainMargin(){
    const height = document.getElementById('NavBar').offsetHeight;
    document.getElementById('main-video').style.marginTop = 94+'px';
    console.log('The height is: '+height);
    console.log('The element 1 is: '+document.getElementById('NavBar'));
    console.log('The element 2 is: '+document.getElementById('main-video'));
    toggleVideoPlayer('close');
}

const mainVideo = document.getElementById('container1');
const videoPlayer = document.getElementById('videoPlayer');

function toggleVideoPlayer(url){
    
    if(url != 'close'){
        if(typeof url != 'string') throw new ReferenceError("The argument should be a string");

        url += '?wmode=opaque';
        const iFrame = document.getElementById('video-player-iframe');
        iFrame.src = url;
        console.log("The url is: "+url);

        mainVideo.style.display = 'none';
        videoPlayer.style.display = 'block';

        window.location.hash = "";
        window.location.hash = "top";
    } else {
        mainVideo.style.display = 'block';
        videoPlayer.style.display = 'none';
    }
}