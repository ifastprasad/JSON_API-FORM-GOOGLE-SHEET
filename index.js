const url = "https://script.google.com/macros/s/AKfycbzOmSOUz_hAGjzGCzl9qjBedztcKSibmR6xuiGZrWPSMM92ksvjOe4KmHKhfiU7aMzijg/exec";

function testGs2() {
    
    fetch(url)
    .then(d => d.json())
    .then(d => {    
    document.getElementById("app").textContent = d[0].status;
    }); 
}


function testGs() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json", 
    
        },
        redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name : name, id: id }) // body data type must match "Content-Type" header
      });

      
}

document.getElementById("btn").addEventListener("click", testGs2);
document.getElementById("btn2").addEventListener("click", testGs);
