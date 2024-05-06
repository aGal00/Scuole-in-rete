function start() {
    const myKeyValues = window.location.search;
    const urlParams = new URLSearchParams(myKeyValues);
    const id = urlParams.get('id');
    console.log("id:", id);

    fetch('https://expert-tribble-x5555g695wx6f9jp-1337.app.github.dev/api/schools/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response)
            } else {
                console.log("no data")
            }
            divScuola=document.getElementById('Scuola')
            h1=document.createElement("h1");
            h1.innerText=response.data.attributes.Name;
            h1.id="TitoloScuola"
            divScuola.appendChild(h1)
            lista=document.createElement('ul')
            elemento1=document.createElement('li')
            elemento1.innerText=response.data.attributes.Address+" - "+response.data.attributes.CAP+" "+response.data.attributes.City+", "+response.data.attributes.Province
            lista.appendChild(elemento1)
            elemento2=document.createElement('li')
            elemento2.innerText="Mensa più vicina: "+response.data.attributes.mensaVicina+" - "+response.data.attributes.CAP+" "+response.data.attributes.City+", "+response.data.attributes.Province
            lista.appendChild(elemento2)
            elemento3=document.createElement('li')
            elemento3.innerText="Convitto più vicina: "+response.data.attributes.Convitto+" - "+response.data.attributes.CAP+" "+response.data.attributes.City+", "+response.data.attributes.Province
            lista.appendChild(elemento3)
            divScuola.appendChild(lista)
            introDescrizione=document.createElement('p')
            introDescrizione.innerText="Descrizione: "
            for (let i = 0; i < response.data.attributes.Description.length; i++) {
                descrizione=document.createElement('p')
                descrizione.innerText=response.data.attributes.Description[i].children[0].text
                divScuola.appendChild(descrizione)
            }
            divVideo=document.getElementById('Video')
            video=document.createElement('video')
            video.src=response.data.attributes.video
            video.toggleAttribute("controls", true);
            divVideo.appendChild(video)

            divMappa=document.getElementById('Mappa')
            linkMappa=document.createElement('iframe')
            /*linkMappa.onload = (e => {
                divMappa.innerHTML = ""
            })*/
            linkMappa.src=response.data.attributes.maps
            linkMappa.width="90%";
            linkMappa.loading="lazy"
            linkMappa.referrerpolicy="no-referrer-when-downgrade"
            linkMappa.id="maps"
            divMappa.appendChild(linkMappa)

            divIndirizzi=document.getElementById('Indirizzi')
            Indirizzi=document.createElement('ul')
            for (let i = 0; i < response.data.attributes.paths.data.length; i++) {
                indirizzo=document.createElement('li')
                indirizzo.innerText= response.data.attributes.paths.data[i].attributes.Name
                divIndirizzi.appendChild(indirizzo)
            }

            divOpenDay=document.getElementById('OpenDay')
            OpenDay=document.createElement('ul')
            for (let i = 0; i < response.data.attributes.open_days.data.length; i++) {
                el=document.createElement('li')
                el.innerText=response.data.attributes.open_days.data[i].attributes.Date+", "+response.data.attributes.open_days.data[i].attributes.StartTime.substr(0,5);
                divOpenDay.appendChild(el)
            }

            divContatti=document.getElementById('Contatti')
            Contatti=document.createElement('ul')
            
        })
}