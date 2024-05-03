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
            } else {
                console.log("no data")
            }
        })
}