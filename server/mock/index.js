function ajax (querytype,url){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open(querytype, url);
    xhr.send();
    xhr.onreadystatechange = function (){
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status <300){
          resolve(xhr.response)
        } else{
          reject(xhr.status)
        }
      }
    }
  })
}

var toAdvertisement = ajax('get','http://127.0.0.1:8001/headerAd')