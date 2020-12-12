class clothes {
    constructor(name, reference, quantity, category) {
        this.name = name;
        this.reference = reference;
        this.quantity = quantity;
        this.category = category;
    }
}
function generate(tabobjet, tabattribut) {
    let newtabobjet = [];
    let body = document.getElementsByTagName("body")[0];
    let tbl = document.createElement("table");
    let tblheader = document.createElement("tr");
    let tblBody = document.createElement("tbody");
    tbl.appendChild(tblheader);
    for (let y in tabobjet) {
        arr_diff(tabobjet[y], Object.keys(tabobjet[y]), tabattribut);
        newtabobjet = Object.keys(tabobjet[y]);
        console.log(newtabobjet.sort());
        console.log(tabobjet[y]);
    }
    for (let i of tabattribut) {
        let rowheader = document.createElement("th");
        rowheader.innerHTML = i;
        tblheader.appendChild(rowheader);
    }
    displaytab(tabobjet, tblBody);
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}
// afficher le tableau
function displaytab(tabobjet, tablbody) {
    for (let i in tabobjet) {
        var row = document.createElement("tr");
        for (let j in tabobjet[i]) {
            var cell = document.createElement("td");
            cell.innerHTML = tabobjet[i][j];
            row.appendChild(cell);
        }
        tablbody.appendChild(row);
    }
}
// permet de comparer les attribus 
function arr_diff(tabobjetatt, a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        }
        else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    for (i of diff) {
        delete tabobjetatt[i];
    }
    return tabobjetatt;
}
let clothes1 = new clothes("t-shirt red", "65165165161", 1, "t-shirt");
let clothes2 = new clothes("t-shirt greeen", "65165165161", 2, "poire");
let clothes3 = new clothes("t-shirt blue", "65165165161", 24, "dragont");
let clothes4 = new clothes("t-shirt gray", "65165165161", 30, "OM");
let tabclothes = [];
let tabatt = [];
tabclothes.push(clothes1, clothes2, clothes3, clothes4);
tabatt.push("category", "name", "reference");
generate(tabclothes, tabatt);
