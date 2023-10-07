var nb=0;
function timer()
{
    nb++;
    document.getElementById('monH1').innerHTML=nb;
}
setInterval("timer()",500*2);
clearInterval();
const prenom="Prisca";
var text="Bonjour "+prenom+" !";
console.log(text);
text=`Bonjour ${prenom}  !`;
console.log(text);

console.log("Quelques de tests ...");
console.log(`5+5*2 = ${5+5*2}`);

nb=12;
console.log(`le panier contient ${nb} article ${nb>1? "s":""}`);
/* le panier contient 12 articles */
console.log(`PI vaut ${Math.PI}`);