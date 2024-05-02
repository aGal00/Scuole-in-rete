function prova() {
    fetch('https://congenial-trout-56g5wvw6px6f47v4-1337.app.github.dev/api/restaurants')
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
}

