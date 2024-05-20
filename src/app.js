/* eslint-disable */
/* import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; */

let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension=['.com','.pt','doggie','.net','.org','.io','.gov','.edu','.mil','.int','.biz','.info','.name','.pro','.coop','.aero','.museum','.cat','.jobs','.mobi','.travel','.tel','.xxx','.asia','.moe','.post','.geo','.kid','.mail','.ninja','.party','.photo','.pics','.science','.site','.space','.tech','.uno','.video','.wiki','.world','.zone','.academy','.accountant','.actor','.agency','.airforce','.army','.associates','.attorney','.auction','.band','.bar','.bargains','.beer','.best','.bid','.bike','.bingo','.bio','.black','.blackfriday'];

/* function something(arr1, arr2, arr3, arr4) {

  let pronounId = Math.floor(Math.random()*pronoun.length);
  let adjId = Math.floor(Math.random()*adj.length);
  let nounId = Math.floor(Math.random()*noun.length);
  let extensionId = Math.floor(Math.random()*extension.length);

  console.log(arr1[pronounId] + arr2[adjId] + arr3[nounId]+ arr4[extensionId]);
}; */

function something2(arr1, arr2, arr3, arr4) {
  let domains = [];
  for(let i=0; i<arr1.length; i++){
    for(let j= 0; j <arr2.length; j++){
      for(let k=0; k < arr3.length; k++){
        for(let l=0; l<arr4.length; l++){
          domains.push(arr1[i]+arr2[j]+arr3[k]+arr4[l]);
        }
      }
    }  
  }
console.log(domains);
}

//something(pronoun, adj, noun, extension);
something2(pronoun, adj, noun, extension);