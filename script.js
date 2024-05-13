function getBranches() {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/branches?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getBranch(id) {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/branches/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getInstitutes() {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/institutes?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getInstitute(id) {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/institutes/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getOpenDays() {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/open-days?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getOpenDay(id) {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/open-days/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getPaths() {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/paths?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getPath(id) {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/paths/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getSchools() {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/schools?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getSchool(id) {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/schools/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
                let maindiv = document.getElementById('scuole');
                let table = createSchoolTable(response.data);
                if(maindiv.lastChild) {
                    maindiv.removeChild(maindiv.lastChild);
                }
                maindiv.appendChild(table);
            } else {
                console.log("no data")
            }
        })
}


function getActivities() {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/activities')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
                let maindiv = document.getElementById('activities');
                let bottoni = createButtonsActivities(response.data);
                maindiv.appendChild(bottoni);
            } else {
                console.log("no data")
            }
        })
}

function getActivity(id) {
    fetch('https://redesigned-eureka-r46pgjq57w62x765-1337.app.github.dev/api/activities/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
                let maindiv = document.getElementById('scuole');
                let table = createSchoolsList(response.data.attributes.schools.data)
                if(maindiv.lastChild) {
                    maindiv.removeChild(maindiv.lastChild)
                }
                maindiv.appendChild(table);
            } else {
                console.log("no data")
            }
        })
}

function createButtonsActivities(activities) {
    let mainbottoni = document.createElement('div');
    activities.forEach(activity => {
        console.log(activity)
        let infos = activity.attributes;
        let button = document.createElement('button');
        button.classList.add('activity-button');
        button.innerText = infos.name;
        button.onclick = function() {
            getActivity(activity.id)
        }
        mainbottoni.appendChild(button);
    });
    return mainbottoni;
}

function createSchoolsList(schools) {
    let table = document.createElement('table');
    schools.forEach(school => {
        console.log(school)
        let row = document.createElement('tr')
        row.onclick = function() {
            getSchool(school.id);
        }
        let cell = document.createElement('td')
        cell.classList.add('tabella-scuole');
        cell.innerText = school.attributes.Name;
        row.appendChild(cell);
        cell = document.createElement('td')
        cell.classList.add('tabella-scuole');
        cell.innerText = school.attributes.City;
        row.appendChild(cell);
        cell = document.createElement('td')
        cell.classList.add('tabella-scuole');
        cell.innerText = school.attributes.Email;
        row.appendChild(cell);
        table.appendChild(row);
    });
    return table;
}

function createSchoolTable(school) {
    let infos = school.attributes;
    console.log(infos);
    let div = document.createElement('div')
    let name = document.createElement('h1')
    name.innerText = infos.Name
    div.appendChild(name)

    let address = document.createElement('h1')
    address.innerText = infos.Address
    div.appendChild(address)

    let h1 = document.createElement('h1');
    h1.innerText = infos.CAP
    div.appendChild(h1)

    h1 = document.createElement('h1');
    h1.innerText = infos.Province
    div.appendChild(h1)

    h1 = document.createElement('h1');
    h1.innerText = infos.Website
    div.appendChild(h1)

    h1 = document.createElement('h1');
    h1.innerText = infos.Phone
    div.appendChild(h1)

    h1 = document.createElement('h1');
    h1.innerText = infos.Fax
    div.appendChild(h1)

    h1 = document.createElement('h1');
    h1.innerText = infos.PEC
    div.appendChild(h1)

    return div;
}