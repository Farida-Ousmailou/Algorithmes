
/*
Le but de ce programme et de faire un algorithme capable de compter l'occurence d'un mot dans le texte
de la balise body en excluant le texte entre les balises scripts, les commentaires et le textes
*/

function countOccurence (occurrence) {
  var bodyContent = document.body.innerHTML;

  bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '');
  bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, '');
  bodyContent = bodyContent.replace(/<[^>]+>/g, ' _ ');


  console.log(bodyContent)

  bodyContent = bodyContent.replace(/\s+/g, ' ');

  var regex = new RegExp('(?:^|\\s)' + occurrence + '(?:$|\\s)', 'g');

  var occurrences = bodyContent.match(regex);
 
  return occurrences ? occurrences.length : 0;
} 


document.addEventListener('DOMContentLoaded', function() {
  console.log(countOccurence("Hello"));
});


  

