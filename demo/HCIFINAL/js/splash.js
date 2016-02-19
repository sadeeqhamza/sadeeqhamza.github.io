$(document).on("pagecreate","#splash-page",function(){

  
    setTimeout(function(){
       $.mobile.changePage( "#home-page", { transition: "slideup", changeHash: false });
    }, 2000);

});