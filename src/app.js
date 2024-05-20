/* eslint-disable */
/* import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; */

function something() {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension=['.com','.pt','doggie','.net','.org','.io','.gov','.edu','.mil','.int','.biz','.info','.name','.pro','.coop','.aero','.museum','.cat','.jobs','.mobi','.travel','.tel','.xxx','.asia','.moe','.post','.geo','.kid','.mail','.ninja','.party','.photo','.pics','.science','.site','.space','.tech','.uno','.video','.wiki','.world','.zone','.academy','.accountant','.actor','.agency','.airforce','.army','.associates','.attorney','.auction','.band','.bar','.bargains','.beer','.best','.bid','.bike','.bingo','.bio','.black','.blackfriday'];
 
  let pronounId = Math.floor(Math.random()*pronoun.length);
  let adjId = Math.floor(Math.random()*adj.length);
  let nounId = Math.floor(Math.random()*noun.length);
  let extensionId = Math.floor(Math.random()*extension.length);

  console.log(pronoun[pronounId] + adj[adjId] + noun[nounId]+ extension[extensionId]);
};
something();