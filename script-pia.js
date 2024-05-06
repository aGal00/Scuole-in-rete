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
            length=response.data.attributes.paths.data.length
            if (length>0){
                Ind=document.createElement('h2')
                Ind.innerText="INDIRIZZI:"
                divIndirizzi.appendChild(Ind)
                for (let i = 0; i < length; i++) {
                    indirizzo=document.createElement('li')
                    indirizzo.innerText= response.data.attributes.paths.data[i].attributes.Name
                    divIndirizzi.appendChild(indirizzo)
                }
                divIndirizzi.style.marginBottom= "2vh";
            }
            

            divOpenDay=document.getElementById('OpenDay')
            OD=document.createElement('h2')
            OD.innerText="OPEN DAY:"
            divOpenDay.appendChild(OD)
            OpenDay=document.createElement('ul')
            for (let i = 0; i < response.data.attributes.open_days.data.length; i++) {
                el=document.createElement('li')
                el.innerText=response.data.attributes.open_days.data[i].attributes.Date+", "+response.data.attributes.open_days.data[i].attributes.StartTime.substr(0,5);
                divOpenDay.appendChild(el)
            }

            divContatti=document.getElementById('Contatti')
            cont=document.createElement('h2')
            cont.innerText="CONTATTI:"
            divContatti.appendChild(cont)
            Contatti=document.createElement('ul')
            if (response.data.attributes.Phone) {
                phone=document.createElement('li')
                phone.innerText="Telefono: "+response.data.attributes.Phone
                divContatti.appendChild(phone)
            }
            if (response.data.attributes.Fax) {
                fax=document.createElement('li')
                fax.innerText="Fax: "+response.data.attributes.Fax
                divContatti.appendChild(fax)
            }
            if (response.data.attributes.PEC) {
                pec=document.createElement('li')
                pec.innerText="PEC: "+response.data.attributes.PEC
                divContatti.appendChild(pec)
            }
            if (response.data.attributes.Email) {
                email=document.createElement('li')
                email.innerText="Email: "+response.data.attributes.Email
                divContatti.appendChild(email)
            }
            if (response.data.attributes.DirigenteMail) {
                dirigente=document.createElement('li')
                dirigente.innerText="Mail del dirigente: "+response.data.attributes.DirigenteMail
                divContatti.appendChild(dirigente)
            }
            if (response.data.attributes.SegreteriaMail) {
                segreteria=document.createElement('li')
                segreteria.innerText="Mail della segreteria: "+response.data.attributes.SegreteriaMail
                divContatti.appendChild(segreteria)
            }
            if (response.data.attributes.Website) {
                sito=document.createElement('li')
                sito.innerText="Sito Web: "+response.data.attributes.WebSite
                divContatti.appendChild(sito)
            }
            
        })
}