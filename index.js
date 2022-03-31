// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, string){
    const driverMatch = drivers.filter(element => {
        return element.toLowerCase() === string.toLowerCase()
    });
    return driverMatch
}

function fuzzyMatch(drivers, string){
    const driverStart = drivers.filter(element => element.startsWith(string));
        return driverStart
}

function matchName(drivers, name){
    const newMatchName = drivers.filter(element => element.name === name)
    return newMatchName
}