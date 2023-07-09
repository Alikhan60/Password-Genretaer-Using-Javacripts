// var textbox = document.getElementById("textbox")

// textbox.addEventListener("input", function() {
//     let text = this.value;

//     let char = text.length;
//     text = text.trim()
//     document.getElementById("char").innerHTML = char;
//     let words = text.split(" ")
//     let clean = words.filter(function(el) {
//         return el != "";
//     })
//     document.getElementById("word").innerHTML = clean.length;

// })

let textbox = document.getElementById("textbox")

textbox.addEventListener("input", function() {
    let text = this.value;
    let char = text.length;
    text = text.trim()

    document.getElementById("char").innerHTML = text.length;


    let words = text.split(' ')
    let clean = words.filter(function(elm) {
        return elm != ""
    })
    document.getElementById("word").innerHTML = clean.length;

})