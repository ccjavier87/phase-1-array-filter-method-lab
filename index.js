// Code your solution here

function findMatching  (data, match) {
    return data.filter(function (name){
        return name.toLowerCase() === match.toLowerCase()
    })
}

function fuzzyMatch (data, match) {
    return data.filter(
        name => name[0] === match[0]
    )
}

function matchName(data, name) {
    return data.filter(
        function (hometown) {
            return hometown.name === name
        }
    )
}