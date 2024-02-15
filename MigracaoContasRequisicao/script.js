var XMLHttpRequest = require('xhr2');

const data = [
    { token: '' , session_token: '' },
]


function sendRequest(token, session_token) {

    console.log("Token>>> ", token);
    console.log("Session Token>>> ", session_token);
    console.log("\r\n");

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            console.log("\r\n");
        }
    });

    xhr.open("POST", "");
    xhr.setRequestHeader("Authorization", `${token}`);
    xhr.setRequestHeader("ip", "0.0.0.0"); 
    xhr.setRequestHeader("sessionToken", `${session_token}`);

    xhr.send();
}

/*data.forEach(async (d, index) => {
    if (index > 1) {
        console.log("Passou 3 e cabou o bicoito")
        return
    }
    // await sendRequest(d.token, d.session_token)*/

    let index = 0;

    function processRequest(index) {
        if (index < data.length) {
           sendRequest(data[index].token, data[index].session_token);
             setTimeout(() => {
               processRequest(index + 1);
             }, 1000); 
        } else {
            console.log("Percorreu todo o array");
        }
    }

    processRequest(index);

