console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML="New Value";

var img=document.getElementById('madi');

marginLeft=0;
function moveRight() {
    marginLeft=margiLeft+2;
    img.style.marginLeft=marginLeft.toString()+'px';
    
}

img.onClick= function() {
    var interval=setInterval(moveRight,50);
    
};

