/**
 * XHR Objects in pure JavaScript.
 * Examples shows how you can create a XHR Object (XMLHttpRequest) in pure javascript
 * and load in some data from a different file. 
 */

document.getElementById("getDataBtn").addEventListener('click', loadData);


function loadData() {
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // open - type of request, the url, and to be done async or not
    xhr.open('GET', 'data.txt', true);

    // when the request is done.
    // onload is actully kind of new, you used to have to do "onreadystatechange" and check the state
    // example below this
    xhr.onload = function() {
        if(this.status === 200){
            document.getElementById("output").innerText = this.responseText;
        }
    }

    // Optional - used for like a spinner to update the progress of loading up the data.
    xhr.onprogress = function(currentProgress) {
        console.log(currentProgress);
        console.log("CURRENT STATE: ", getCurrentState(xhr.readyState));
    }

    // older way of doing it
    // not really used anymore.
    xhr.onreadystatechange = function() {
        // lets log the state we are at.
        console.log("CURRENT STATE: ", getCurrentState(xhr.readyState));
        // was successful and the request was finished
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
        }
    }

    // on error
    xhr.onerror = function() {
        console.log("Uh oh...something happened, there was an error");
    }

    // we actually have to send out the request.
    xhr.send();


    // helper function to print the current state of the xhr
    function getCurrentState(state) {
        // Ready State Values
        // 0: request not initalized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready.
        switch(state) {
            case 0: return "Request Not Initialized";
            case 1: return "Server Connection Established..."
            case 2: return "Request Received..."
            case 3: return "Processing Request..."
            case 4: return "Request finished and response is ready...";
        }
    }
}