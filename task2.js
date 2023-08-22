let XMLHttpRequest = require('xhr2');
let task = new XMLHttpRequest();
task.open('GET','https://restcountries.com/v3.1/all')
task.onload = function () {
    let users = JSON.parse(task.responseText);

    let flags = [];

    for (let user of users) {
        flags.push(user['flags']);
    }

    console.log(flags);
};


task.send();