const { createECDH } = require("crypto");

const APILINK = "";
const SEARCHLINK = "";
const IMG_path = "";


const form = document.getElementById("from");
const main  = document.getElementById("section");
const search = document.getElementById("query");



function returnMovies(url){
      fetch(url).then(res => res.json())
      .then(function(data){
        console.log(data.results);
        data.results.array.forEach(element => { 
            const div_card = document.createElement("div");
            div_card.setAttribute("class" , "card");
            const div_column = document.createElement("div");
            div_column.setAttribute("class" , "column");
            const div_row = document.createElement("div");
            div_row.setAttribute("class" , "row");
            const image = document.createElement("img");
            image.setAttribute("class" , "thumbnail");
            image.setAttribute("id" , "image");
            const title = document.createElement("h3");
            title.setAttribute("id" , "title");
            const center = document.createElement("center");
            
            title.innerHTML = `{$element.title}`;
            image.src = img_path + element.poster_path;
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(card);
            div_row.appendChild(column);

            main.appendChild(div_row);
        });
      })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML = "";

    const searchResult = search.value;
    if(searchResult){
        returnMovies(SEARCHLINK + searchResult);
        search.value = "";
    }

})