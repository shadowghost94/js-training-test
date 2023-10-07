function getPluriel(nb,pluriel="s")
{
    return nb>1 ? pluriel:""; 
}

const prix=25,nbArticle=1;
//appel de la fonction 
console.log("Votre panier vaut "+prix+" euro"+getPluriel(prix));
console.log("il contient "+nbArticle+" article "+getPluriel(nbArticle));