// fetching API from rest countries
let value = fetch('https://restcountries.com/v3.1/all').then((data) => data.json()).then((data1) => show(data1));

// Function for displaying all elements in HTML
function show(data1) {
    // console.log(data1);
    for (let i = 0; i < data1.length; i++) {
        let divCol = document.createElement("div");
        divCol.classList.add('col');
        let divCard = document.createElement("div");
        divCard.classList.add('card');
        let img = document.createElement("img");
        img.classList.add('card-img-top');
        img.setAttribute('src', data1[i].flags.svg);
        let divCardBody = document.createElement("div");
        divCardBody.classList.add('card-body');
        let h4 = document.createElement("h4");
        h4.classList.add('card-title');
        h4.innerHTML = `Country Name ${i+1}: ${data1[i].name.common}`
        let pText1 = document.createElement("p");
        pText1.classList.add('card-text');
        pText1.innerHTML = `Capital : ${data1[i].capital}`;
        let pText2 = document.createElement("p");
        pText2.classList.add('card-text');
        pText2.innerHTML = `Region : ${data1[i].region}`;

        // let con = document.getElementById("con");
        let row = document.getElementById('row');
        divCardBody.append(h4, pText1, pText2);
        divCard.append(img, divCardBody);
        divCol.append(divCard);
        row.append(divCol);
        console.log(data1[i])
    }
}