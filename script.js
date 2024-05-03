function getBranches() {
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/branches')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/branches/'+id)
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/institutes')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/institutes/'+id)
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/open-days')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/open-days/'+id)
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/paths')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/paths/'+id)
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/schools')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/schools/'+id)
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/activities')
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
    fetch('https://vigilant-fortnight-9v7wp6pvwgwh7qg6-1337.app.github.dev/api/activities/'+id)
        .then(response => response.json())
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log("no data")
            }
        })
}

