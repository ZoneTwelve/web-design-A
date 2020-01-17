function loadTemplate(){
  let list = document.querySelectorALl('div[rel="import"]');
  for(let i=0;i<list.length;i++)
    downloadTemplate(list[i].href, (result)=>{
      list[i].innerHTML = result;
    });
}

function downloadTemplate(uri, callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState==4&&this.status==200){
      callback(this.responseText);
    }
  };
  xhttp.open("GET", uri, true);
  xhttp.send();
}