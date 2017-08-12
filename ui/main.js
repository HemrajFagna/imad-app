var button= document.getElementById("counter");

button.onClick= function () {
  
  var request=new XMLHttpRequest();
  request.onreadyStateChange=function() {
      if(request.readyState==XMLHttpRequest.DONE) {
          if(request.status==200) {
              var counter = request.responseText;
              var span= document.getElementById("count");
              span.innerHTML=coounter.toString();
          }
      }
  }
    
  
  
    
};

request.open('GET','http://u15103352hemraj.imad.hasura-app.io/counter',true);
request.send(null);
