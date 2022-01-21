let counter = document.getElementById("counter")

let count = 0


function increment() {

    count += 1;
    document.getElementById("counter").innerText = count
    
}

function save() {

    
    let countStr = count + "-"
    document.getElementById("pre_ent")
    .textContent += countStr
}

function refresh() {
    count = 0
    counter.innerText = count
}