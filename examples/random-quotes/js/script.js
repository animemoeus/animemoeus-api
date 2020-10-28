const text = document.querySelector("#text");
const author = document.querySelector("#author");
const source = document.querySelector("#source");


function getQuotes(){
    const ajax = new XMLHttpRequest;

    ajax.addEventListener("load",() => {
        if(ajax.status === 200){

            quote = JSON.parse(ajax.responseText)["data"];

            text.textContent = quote["text"];
            author.textContent = quote["author"]+",";
            source.textContent = quote["source"];
            
        }
        else{
            text.textContent = "Failed..."
            author.textContent = "";
            source.textContent = "";
        }
    });

    ajax.open("GET","https://api.animemoe.us/quotes/random/");
    ajax.send();
}

getQuotes();


const refreshButton = document.querySelector("button");

refreshButton.addEventListener("click",() => {

    text.textContent = "Loading...";
    author.textContent = "";
    source.textContent = "";

    getQuotes();
});