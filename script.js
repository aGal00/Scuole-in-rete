var linkdatabase = 'https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev'

function getActivities() {
    fetch(linkdatabase + '/api/activities')
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
    fetch(linkdatabase + '/api/activities/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                let maindiv = document.getElementById('scuole');
                let titolo = createTitolo()
                let table = createSchoolsList(response.data.attributes.schools.data)
                maindiv.innerHTML = ''
                maindiv.appendChild(titolo)
                maindiv.appendChild(table)
            } else {
                console.log("no data")
            }
        })
}

function createButtonsActivities(activities) {
    let mainbottoni = document.createElement('div');
    mainbottoni.classList.add('row')
    activities.forEach(activity => {
        let infos = activity.attributes;
        let div = document.createElement('div');
        div.classList.add('col-sm-2')
        let circle = document.createElement('div')
        circle.classList.add('activity');
        let textdiv = document.createElement('div')
        textdiv.classList.add('text-div')
        let text = document.createElement('p')
        text.classList.add('text-activity')
        text.innerText = infos.name;
        textdiv.appendChild(text)
        circle.appendChild(textdiv)
        div.appendChild(circle)
        div.onclick = function () {
            getActivity(activity.id)
        }
        mainbottoni.appendChild(div);
    });
    return mainbottoni;
}

function createSchoolsList(schools) {
    let divmain = document.createElement('div');
    divmain.classList.add('row')
    divmain.classList.add('justify-content-sm-center')
    divmain.classList.add('listascuole')
    schools.forEach(school => {
        let bigdiv = document.createElement('div')
        bigdiv.classList.add('bigdiv')
        bigdiv.classList.add('col-sm-2')
        let a = document.createElement('a')
        let link = './scuola.html?id=' + school.id
        a.setAttribute("href", link)
        let img = document.createElement('img')
        img.classList.add('img-fluid')
        img.classList.add('image')
        switch (school.id) {
            case 3:
                img.src = 'assets/loghi/logo rosmini.png'
                break;
            case 4:
                img.src = 'assets/loghi/logo filzi.png'
                break;
            case 5:
                img.src = 'assets/loghi/logo depero.png'
                break;
            case 6:
                img.src = 'assets/loghi/logo arcivescovile.png'
                break;
            case 7:
                img.src = 'assets/loghi/logo steam.png'
                break;
            case 8:
                img.src = 'assets/loghi/logo fontana.png'
                break;
            case 9:
                img.src = 'assets/loghi/logo don milani.png'
                break;
            case 10:
                img.src = 'assets/loghi/logo veronesi.png'
                break;
            case 11:
                img.src = 'assets/loghi/marconi logo.png'
                break;
            case 12:
                img.src = 'assets/loghi/logo barelli.png'
                break;
            case 13:
                img.src = 'assets/loghi/alberghiero.png'
                break;
            case 14:
                img.src = 'assets/loghi/logo upt.png'
                break;
            default:
                break;
        }
        a.appendChild(img)
        bigdiv.appendChild(a)
        let schoolname = document.createElement('h4')
        schoolname.classList.add('scuola')
        schoolname.innerText = school.attributes.Name
        bigdiv.appendChild(schoolname)
        divmain.appendChild(bigdiv)
    });
    return divmain;
}

function start() {
    const myKeyValues = window.location.search;
    const urlParams = new URLSearchParams(myKeyValues);
    const id = urlParams.get('id');
    console.log("id:", id);
    fetch(linkdatabase + '/api/schools/' + id + '?populate=*')
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

function createTitolo() {
    let div = document.createElement('div')
    div.classList.add('titolo')
    let text = document.createElement('h1')
    text.classList.add('titolo-text')
    text.innerText = 'Risultati:'
    div.appendChild(text)
    return div
}