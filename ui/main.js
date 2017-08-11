console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML="New Value";

var img=document.getElementById('modi');

marginLeft=0;
function moveRight() {
    marginLeft=margiLeft+2;
    img.style.marginLeft=marginLeft+'px';
    
}

img.onclick= function() {
    var interval=setInterval(moveRight,50);
    
};

