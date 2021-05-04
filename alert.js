document.addEventListener("DOMContentLoaded", function(event){
  if(window.matchMedia("(orientation: portrait)").matches){
      setTimeout(() => { alert("For The Best Experience Use Landscape!"); },100);
  }
});