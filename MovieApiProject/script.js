let form = document.querySelector(".search-bar")
// let cont = document.querySelector(".container");
let sh=document.querySelector(".show");

async function getdata(d) {

    if (d != "") {

        let response = await axios.get(d);

        showdata(response);


    }
    else {
        let div = document.createElement("div");
        div.innerHTML = `<h3>Please enter movie name</h3>`;
        cont.append(div);
    }

}

function showdata(rs) {
    sh.innerHTML = "";
    let div = document.createElement("div");

    div.innerHTML = `<h1>Film: ${rs.data.Title}</h1>
    <h3>Actor: ${rs.data.Actors}</h3>
    <h3>Director: ${rs.data.Director}</h3>
    <h3>Year: ${rs.data.Year}</h3>
    <h3>Language: ${rs.data.Language}</h3>
    <img src="${rs.data.Poster}">
   
    `;
    div.style.color="goldenrod"
    sh.append(div);
}

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let inp = document.querySelector(".text");
    //console.log(inp.value);
    let link = "http://www.omdbapi.com/?apikey=" + "26f952a4&t=" + inp.value;
    getdata(link);
    form.reset();


})

let clr = document.querySelector(".clr");
clr.addEventListener("click", function () {
    location.reload();
})
