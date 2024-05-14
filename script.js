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
                if (maindiv.lastChild) {
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
                if (maindiv.lastChild) {
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
        button.onclick = function () {
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
        row.onclick = function () {
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

function start() {
    const myKeyValues = window.location.search;
    const urlParams = new URLSearchParams(myKeyValues);
    const id = urlParams.get('id');
    console.log("id:", id);

    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/schools/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response)
                createPageSchool(response)
            } else {
                console.log("no data")
            }



        })
}

function createPageSchool(response) {
    divScuola = document.getElementById('Scuola')
    h1 = document.createElement("h1");
    h1.innerText = response.data.attributes.Name;
    h1.id = "TitoloScuola"
    divScuola.appendChild(h1)
    lista = document.createElement('ul')
    elemento1 = document.createElement('li')
    elemento1.innerText = response.data.attributes.Address + " - " + response.data.attributes.CAP + " " + response.data.attributes.City + ", " + response.data.attributes.Province
    lista.appendChild(elemento1)
    elemento2 = document.createElement('li')
    elemento2.innerText = "Mensa più vicina: " + response.data.attributes.mensaVicina + " - " + response.data.attributes.CAP + " " + response.data.attributes.City + ", " + response.data.attributes.Province
    lista.appendChild(elemento2)
    elemento3 = document.createElement('li')
    elemento3.innerText = "Convitto più vicina: " + response.data.attributes.Convitto + " - " + response.data.attributes.CAP + " " + response.data.attributes.City + ", " + response.data.attributes.Province
    lista.appendChild(elemento3)
    divScuola.appendChild(lista)
    introDescrizione = document.createElement('p')
    introDescrizione.innerText = "Descrizione: "
    for (let i = 0; i < response.data.attributes.Description.length; i++) {
        descrizione = document.createElement('p')
        descrizione.innerText = response.data.attributes.Description[i].children[0].text
        divScuola.appendChild(descrizione)
    }
    divVideo = document.getElementById('Video')
    video = document.createElement('video')
    video.src = response.data.attributes.video
    video.toggleAttribute("controls", true);
    divVideo.appendChild(video)

    divMappa = document.getElementById('Mappa')
    linkMappa = document.createElement('iframe')
    /*linkMappa.onload = (e => {
        divMappa.innerHTML = ""
    })*/
    linkMappa.src = response.data.attributes.maps
    linkMappa.width = "90%";
    linkMappa.loading = "lazy"
    linkMappa.referrerpolicy = "no-referrer-when-downgrade"
    linkMappa.id = "maps"
    divMappa.appendChild(linkMappa)

    divIndirizzi = document.getElementById('Indirizzi')
    Indirizzi = document.createElement('ul')
    length = response.data.attributes.paths.data.length
    if (length > 0) {
        Ind = document.createElement('h2')
        Ind.innerText = "INDIRIZZI:"
        divIndirizzi.appendChild(Ind)
        for (let i = 0; i < length; i++) {
            indirizzo = document.createElement('li')
            indirizzo.innerText = response.data.attributes.paths.data[i].attributes.Name
            divIndirizzi.appendChild(indirizzo)
        }
        divIndirizzi.style.marginBottom = "2vh";
    }


    divOpenDay = document.getElementById('OpenDay')
    OD = document.createElement('h2')
    OD.innerText = "OPEN DAY:"
    divOpenDay.appendChild(OD)
    OpenDay = document.createElement('ul')
    for (let i = 0; i < response.data.attributes.open_days.data.length; i++) {
        el = document.createElement('li')
        el.innerText = response.data.attributes.open_days.data[i].attributes.Date + ", " + response.data.attributes.open_days.data[i].attributes.StartTime.substr(0, 5);
        divOpenDay.appendChild(el)
    }

    divContatti = document.getElementById('Contatti')
    cont = document.createElement('h2')
    cont.innerText = "CONTATTI:"
    divContatti.appendChild(cont)
    Contatti = document.createElement('ul')
    if (response.data.attributes.Phone) {
        phone = document.createElement('li')
        phone.innerText = "Telefono: " + response.data.attributes.Phone
        divContatti.appendChild(phone)
    }
    if (response.data.attributes.Fax) {
        fax = document.createElement('li')
        fax.innerText = "Fax: " + response.data.attributes.Fax
        divContatti.appendChild(fax)
    }
    if (response.data.attributes.PEC) {
        pec = document.createElement('li')
        pec.innerText = "PEC: " + response.data.attributes.PEC
        divContatti.appendChild(pec)
    }
    if (response.data.attributes.Email) {
        email = document.createElement('li')
        email.innerText = "Email: " + response.data.attributes.Email
        divContatti.appendChild(email)
    }
    if (response.data.attributes.DirigenteMail) {
        dirigente = document.createElement('li')
        dirigente.innerText = "Mail del dirigente: " + response.data.attributes.DirigenteMail
        divContatti.appendChild(dirigente)
    }
    if (response.data.attributes.SegreteriaMail) {
        segreteria = document.createElement('li')
        segreteria.innerText = "Mail della segreteria: " + response.data.attributes.SegreteriaMail
        divContatti.appendChild(segreteria)
    }
    // if (response.data.attributes.Website) {
    //     sito=document.createElement('li')
    //     var testo=response.data.attributes.Website
    //     let link =" <a href=testo>testo</a>"
    //     sito.insertAdjacentHTML("beforeend", link)
    //     divContatti.appendChild(sito)
    // }
}