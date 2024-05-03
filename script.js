function getBranches() {
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/branches?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/branches/' + id + '?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/institutes?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/institutes/' + id + '?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/open-days?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/open-days/' + id + '?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/paths?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/paths/' + id + '?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/schools?populate=*')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/schools/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}


function getActivities() {
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/activities?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

function getActivity(id) {
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/activities/' + id + '?populate=*')
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

