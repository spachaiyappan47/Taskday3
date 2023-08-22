let XMLHttpRequest = require('xhr2');
let task = new XMLHttpRequest();
task.open('GET','https://restcountries.com/v3.1/all')

task.onload = function () {
    let users = JSON.parse(task.responseText);
    
  
    let cuntriesname=[];
    let region=[];
    let subregion=[];
    let population=[];
    for (let user of users) {
       
       cuntriesname.push(user['name']);
       region.push(user['region']);
       subregion.push(user['subregion']);
       population.push(user['population']);
    }

    
    console.log(cuntriesname);
    console.log(region);
    console.log(subregion);
    console.log(population);
};



task.send();