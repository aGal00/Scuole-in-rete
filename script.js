function ricerca(endpoint) { // link del database
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/' + endpoint)
        .then(response => response.json())
        .then(response => {
            if (response) {
                return response;
            } else {
                return "error";
            }
        })
}

