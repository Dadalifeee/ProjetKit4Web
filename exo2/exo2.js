class clothes {
    constructor(name, reference, quantity, category) {
        this.name = name;
        this.reference = reference;
        this.quantity = quantity;
        this.category = category;
    }
}
function generate(tabobjet, tabattribut, color = "#6495ed", colortext = "black", colorcell = "#f7f7f7") {
    let newtabobjet = [];
    let body = document.getElementsByTagName("body")[0];
    let tbl = document.createElement("table");
    let tblheader = document.createElement("tr");
    let tblBody = document.createElement("tbody");
    tbl.appendChild(tblheader);
    for (let y in tabobjet) {
        arr_diff(tabobjet[y], Object.keys(tabobjet[y]), tabattribut);
        newtabobjet = Object.keys(tabobjet[y]);
    }
    for (let i of tabattribut) {
        let rowheader = document.createElement("th");
        let arrowdown = document.createElement('span');
        let arrowup = document.createElement('span');
        arrowdown.innerHTML = "&darr;";
        arrowup.innerHTML = "&uarr;";
        arrowdown.addEventListener("click", function () {
            arr_sort(tabobjet, i, false, tbl);
        });
        arrowup.addEventListener("click", function () {
            arr_sort(tabobjet, i, true, tbl);
        });
        rowheader.innerHTML = i;
        rowheader.appendChild(arrowdown);
        rowheader.appendChild(arrowup);
        changecolor(rowheader, color, colortext);
        tblheader.appendChild(rowheader);
    }
    displaytab(tabobjet, tblBody, colorcell);
    changecolor(tbl, color, colortext);
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}
function changecolor(element, color, color2) {
    element.style.backgroundColor = color;
    element.style.borderColor = color;
    element.style.color = color2;
    return element;
}
// afficher le tableau
function displaytab(tabobjet, tablbody, colorcell) {
    for (let i in tabobjet) {
        var row = document.createElement("tr");
        for (let j in tabobjet[i]) {
            var cell = document.createElement("td");
            cell.innerHTML = tabobjet[i][j];
            cell.style.backgroundColor = colorcell;
            row.appendChild(cell);
        }
        tablbody.appendChild(row);
    }
}
// permet de comparer les attribue 
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
// sort le tableau en fonction de l'attribue sur lequel on clique
function arr_sort(tabobjet, attribu, bool, tbl) {
    return new Promise(function (resolve, reject) {
        let newtableobjet = [];
        newtableobjet = tabobjet.sort(function (a, b) {
            if (bool) {
                if (a[attribu] < b[attribu]) {
                    return -1;
                }
                if (a[attribu] > b[attribu]) {
                    return 1;
                }
                return 0;
            }
            else {
                if (a[attribu] < b[attribu]) {
                    return 1;
                }
                if (a[attribu] > b[attribu]) {
                    return -1;
                }
            }
        });
        tbl.innerHTML = "";
        resolve(generate(newtableobjet, tabatt));
    });
}
let clothes1 = new clothes("t-shirt red", "25165165161", 15, "t-shirt");
let clothes2 = new clothes("t-shirt greeen", "156161616515", 12, "poire");
let clothes3 = new clothes("t-shirt blue", "15165165161", 30, "dragont");
let clothes4 = new clothes("t-shirt gray", "95165165161", 20, "OM");
let tabclothes = [];
let tabatt = [];
tabclothes.push(clothes1, clothes2, clothes3, clothes4);
tabatt.push("name", "reference", "quantity");
generate(tabclothes, tabatt);
// on peut changer les couleurs du tableau, par exemple
// generate(tabclothes, tabatt, '#5bc0de', '#f0ad4e', '#292b2c')
