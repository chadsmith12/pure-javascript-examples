/**
 * Fetch API Examples
 * Example file of using the fetch API get data like text, json, and from an api.
 */

const textBtn = document.getElementById("getText");
const jsonBtn = document.getElementById("getJson");
const apiBtn = document.getElementById("getApi");
const output = document.getElementById("output");

 textBtn.addEventListener('click', getText);
 jsonBtn.addEventListener('click', getJson);
 apiBtn.addEventListener('click', getApiData);


 function getText() {
     fetch('test.txt').then(function(response) {
         return response.text();
     }).then(function(data){
         output.innerHTML = data;
     }).catch(function(err){
         output.innerHTML = data;
     });
 }

 function getJson() {
    fetch('test.json').then(function(response) {
        return response.json();
    }).then(function(data) {
        output.innerHTML = `
        <ul>
            <li>${data.firstName}</li>
            <li>${data.lastName}</li>
            <li>${data.age}</li>
        </ul>
        `;
    }).catch(function(err){
        output.innerHTML = data;
    });
}

function getApiData() {
    fetch('https://api.github.com/users').then(function(response) {
        return response.json();
    }).then(function(data) {
        data.forEach(element => {
            output.innerHTML += `
            <ul>
                <li>${element.login}</li>
            </ul>
            `;
        });

    }).catch(function(err){
        output.innerHTML = err;
    });
}