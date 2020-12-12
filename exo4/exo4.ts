class clothes{
  image: HTMLImageElement;
  name: string;
  reference: string;
  quantity: number;
  category: string;

  constructor(image:HTMLImageElement, name: string, reference:string, quantity:number, category:string){
      this.image = image;
      this.name = name;
      this.reference = reference;
      this.quantity = quantity;
      this.category = category;
  }
}

let rowseelctionner : clothes
let tableauchoisi : boolean

var myImage = new Image(150, 110);
myImage.src = 'avatar.png';
myImage.alt = 'alt text';

var myImage2 = new Image(150, 110);
myImage2.src = 'avatar.png';
myImage2.alt = 'aldsdsdst text';

var myImage3 = new Image(150, 110);
myImage3.src = 'avatar.png';
myImage3.alt = 'aldsdsdsdsdst text';

var myImage4 = new Image(150, 110);
myImage4.src = 'avatar.png';
myImage4.alt = 'aldsaaadsdst text';


let clothes1 : clothes = new clothes(myImage,"t-shirt red", "25165165161", 15, "t-shirt");
let clothes2 : clothes = new clothes(myImage2,"t-shirt greeen", "156161616515", 12, "poire");
let clothes3 : clothes = new clothes(myImage3,"t-shirt blue", "15165165161", 30, "dragont");
let clothes4 : clothes = new clothes(myImage4,"t-shirt gray", "95165165161", 20, "OM");
let tabclothes: Array<clothes> = [];
let tabnewclothes: Array<clothes> = [];
let tabatt: Array<string> = [];

tabclothes.push(clothes1, clothes2, clothes3, clothes4);
tabatt.push("name", "reference", "quantity", "category");

function generate(tabobjet : Array<clothes>){
  let body = document.getElementsByTagName("body")[0];
  // creation table 1 
  let tbl1 = document.createElement("table");
  tbl1.setAttribute("id","tbl1");
  let tblBody1 = document.createElement("tbody");
 // creation table 2
  let tbl2 = document.createElement("table");
  tbl2.setAttribute("id","tbl2");
  let tblBody2 = document.createElement("tbody");

// création barre de recherche

  let recherche1 = document.createElement('input');
  recherche1.setAttribute("class", "rech");

  let btnrecherche1 : HTMLButtonElement;

  let recherche2 = document.createElement('input');
  recherche2.setAttribute("class", "rech");

  let btnrecherche2 : HTMLButtonElement;

  // creation div
  let div0 = document.createElement("div"); 
  let div1 = document.createElement("div"); 
  let div2 = document.createElement("div"); 
  let div3 = document.createElement("div"); 
  let div4 = document.createElement("div"); 
  div0.setAttribute("id","div0");
  div1.setAttribute("id","div1");
  div2.setAttribute("id","div2");
  div3.setAttribute("id","div3");
  div4.setAttribute("id","div4");

  body.appendChild(div0);
  body.appendChild(div1);
  body.appendChild(div2);
  body.appendChild(div3);
  body.appendChild(div4);

  div1.appendChild(recherche1);
  div3.appendChild(recherche2);


  let btnrecherche = function(btncherche : HTMLButtonElement, tabobjetbtn : Array<clothes>, div, tbl, tblBody, bool, recherche){
    btncherche = document.createElement("button");
    btncherche.innerHTML = "Rechercher";
    btncherche.setAttribute("class","btnrech");
    btncherche.addEventListener("click", function(){
    return new Promise(function(resolve, reject){
      console.log(tabobjetbtn)
      let tabobjetrecherche = tabobjetbtn.filter(word => word.name == recherche.value || word.category == recherche.value || word.reference == recherche.value || word.quantity.toString() == recherche.value)
      console.log(tabobjetrecherche)
      if(recherche.value == ""){
        tbl.innerHTML = "";
        tblBody.innerHTML = "";
        for (let i in tabobjetbtn) {
          resolve(displaytab(tabobjetbtn[i], bool, div, tbl, tblBody,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
        }
      }
      else{
        tbl.innerHTML = "";
        tblBody.innerHTML = "";
        for (let i in tabobjetrecherche) {
          resolve(displaytab(tabobjetrecherche[i], bool, div, tbl, tblBody,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
        }
      }
    });
  });
  return btncherche;
}

div1.appendChild(btnrecherche(btnrecherche1, tabobjet, div1, tbl1, tblBody1, 1, recherche1));
div3.appendChild(btnrecherche(btnrecherche2, tabnewclothes, div3, tbl2, tblBody2, 2, recherche2));


for (let i in tabobjet) {
  displaytab(tabobjet[i],  1, div1, tbl1, tblBody1,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet);
}

  // btnrecherche1.addEventListener("click", function(){
  //   return new Promise(function(resolve, reject){
  //     let tabobjetrecherche = tabobjet.filter(word => word.name == recherche1.value || word.category == recherche1.value || word.reference == recherche1.value || word.quantity.toString() == recherche1.value)
  //     if(recherche1.value == ""){
  //       tbl1.innerHTML = "";
  //       tblBody1.innerHTML = "";
  //       for (let i in tabobjet) {
  //         resolve(displaytab(tabobjet[i],  1, div1, tbl1, tblBody1));
  //       }
  //     }
  //     else{
  //       tbl1.innerHTML = "";
  //       tblBody1.innerHTML = "";
  //       for (let i in tabobjetrecherche) {
  //         resolve(displaytab(tabobjetrecherche[i],  1, div1, tbl1, tblBody1));
  //       }
  //     }
  //   });
  // });

  displaybutton(tabobjet, tbl1, tblBody1, tbl2,tblBody2, div0, div1, div2, div3, div4 )
  
  
}

function changelist(tabobjet, tbl1, tblBody1, tbl2, tblBody2, div1, div3, bool){
  return new Promise(function(resolve, reject){
    if(bool == 1){
      tabobjet.push(rowseelctionner);
      let index = tabnewclothes.indexOf(rowseelctionner);
      tabnewclothes.splice(index,1);
    }
    else{
      tabnewclothes.push(rowseelctionner);
      let index = tabobjet.indexOf(rowseelctionner);
      tabobjet.splice(index,1);
    }
      tbl1.innerHTML = "";
      tblBody1.innerHTML = "";
      rowseelctionner = undefined;
      for (let i in tabobjet) {
        resolve(displaytab(tabobjet[i], 1, div1, tbl1,tblBody1,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
      }
      tbl2.innerHTML = "";
      tblBody2.innerHTML = "";
      for (let i in tabnewclothes) {
        resolve(displaytab(tabnewclothes[i], 2, div3, tbl2,tblBody2,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
      }
  });
}

// afficher les boutons
function displaybutton(tabobjet, tbl1, tblBody1, tbl2, tblBody2, div0, div1, div2, div3, div4){

//btn changer list right

let btngoright = document.createElement("button");
btngoright.innerHTML = "\u2794"
btngoright.setAttribute("class","btn");
btngoright.addEventListener("click", function(){
  return new Promise(function(resolve, reject){
    if(rowseelctionner == undefined || tableauchoisi == false){
     reject(alert("Veuillez cliquer sur une ligne valide"));
    }
    else{
      tabnewclothes.push(rowseelctionner);
      let index = tabobjet.indexOf(rowseelctionner);
      tabobjet.splice(index,1);
      tbl1.innerHTML = "";
      tblBody1.innerHTML = "";
      rowseelctionner = undefined;
      for (let i in tabobjet) {
        resolve(displaytab(tabobjet[i], 1, div1, tbl1,tblBody1,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
      }
      tbl2.innerHTML = "";
      tblBody2.innerHTML = "";
      for (let i in tabnewclothes) {
        resolve(displaytab(tabnewclothes[i], 2, div3, tbl2,tblBody2,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
      }
    }
  });
});

//btn changer list left


let btngoleft = document.createElement("button");
btngoleft.innerHTML = "\u2190"
btngoleft.setAttribute("class","btn");
btngoleft.addEventListener("click", function(){
  return new Promise(function(resolve, reject){
    if(rowseelctionner == undefined || tableauchoisi == true){
      reject(alert("Veuillez cliquer sur une ligne valide"));
    }
    else{
      tabobjet.push(rowseelctionner);
      let index = tabnewclothes.indexOf(rowseelctionner);
      tabnewclothes.splice(index,1);
      tbl1.innerHTML = "";
      tblBody1.innerHTML = "";
      rowseelctionner = undefined;
      for (let i in tabobjet) {
        resolve(displaytab(tabobjet[i], 1, div1, tbl1,tblBody1,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
      }
      tbl2.innerHTML = "";
      tblBody2.innerHTML = "";
      for (let i in tabnewclothes) {
        resolve(displaytab(tabnewclothes[i], 2, div3, tbl2,tblBody2,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
      }
    }
  });
});

  let btnup = function(btnupp : HTMLButtonElement, tabobjetbtn : Array<clothes>, div, tbl, tblBody, bool, updown){
    btnupp = document.createElement("button");
    if(updown == 1){
      btnupp.innerHTML = "UP";
    }
    else{
      btnupp.innerHTML = "Down";
    }
    btnupp.setAttribute("class","btn");
    btnupp.addEventListener("click", () => {
      return new Promise(function(resolve, reject){
        let index = tabobjetbtn.indexOf(rowseelctionner);
        let lastindex = tabobjetbtn.length - 1 
        if(rowseelctionner != undefined){
          if(index > 0 && updown == 1){
            tabobjetbtn = array_move(tabobjetbtn, index, index - updown); 
            tbl.innerHTML = "";
            tblBody.innerHTML = "";
            for (let i in tabobjetbtn){
              resolve(displaytab(tabobjetbtn[i], bool, div, tbl, tblBody,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
            }
          }
          else if(index < lastindex && updown == -1){
            tabobjetbtn = array_move(tabobjetbtn, index, index - updown); 
            tbl.innerHTML = "";
            tblBody.innerHTML = "";
            for (let i in tabobjetbtn){
              resolve(displaytab(tabobjetbtn[i], bool, div, tbl, tblBody,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobjet));
            }
          }
          else{
            reject(alert("Veuillez cliquer sur une ligne valide"));
          }
        }
        else{
          reject(alert("Veuillez sélectionner une ligne"));
        }
      });
    });
    return btnupp;
  };

  let btnupleft : HTMLButtonElement
  let btnupright : HTMLButtonElement
  let btndownleft : HTMLButtonElement
  let btndownright : HTMLButtonElement

  div2.appendChild(btngoright);
  div2.appendChild(btngoleft);
  div0.appendChild(btnup(btnupleft, tabobjet, div1, tbl1,tblBody1, 1, 1));
  div0.appendChild(btnup(btndownleft, tabobjet, div1, tbl1,tblBody1, 1, -1));
  div4.appendChild(btnup(btnupright, tabnewclothes, div3, tbl2,tblBody2, 2,1));
  div4.appendChild(btnup(btndownright, tabnewclothes, div3, tbl2,tblBody2, 2,-1));

}
// afficher le tableau

function displaytab(tabobjet,id, div, tbl, tblBody ,div1, tbl1, tblBody1, div3, tbl2, tblBody2, tabobject){
  var row = document.createElement("tr");
  for (let j in tabobjet) {
    var cell = document.createElement("td");
    if(typeof(tabobjet[j]) !== "object"){
      cell.innerHTML = tabobjet[j]
    }
    else{
      cell.appendChild(tabobjet[j]);
    }
    row.appendChild(cell);
  }
  row.addEventListener("click", function(){
    rowseelctionner = tabobjet;
    row.style.backgroundColor = "#5bc0de"; 
    if(id == 1){
      tableauchoisi = true;
    }
    else{
      tableauchoisi = false;
    }
  });
  row.addEventListener('dblclick', function(){
    if(id == 1){
      changelist(tabobject, tbl1, tblBody1, tbl2, tblBody2, div1, div3, 0)
    }
    else{
      changelist(tabobject, tbl1, tblBody1, tbl2, tblBody2, div1, div3, 1)
      
    }
  });
  tblBody.appendChild(row);
  tbl.appendChild(tblBody);
  div.appendChild(tbl);
}

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

generate(tabclothes)