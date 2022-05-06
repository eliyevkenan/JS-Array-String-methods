/*****************Task-1********************** */
const publication = "salam azerbaycan";
var test= publication[0].toUpperCase() + publication.substring(1);
console.log(test)

/*******************Task-2************************** */
var strings = 'Salam Ap203';
var i=0;
var character='';
while (i <= strings.length){
    character = strings.charAt(i);
    if (!isNaN(character )){
        console.log('reqem movcuddur');
    }else{
        if (character == character.toUpperCase()) {
            console.log('boyuk herf movcuddur');
        }
        if (character == character.toLowerCase()){
            console.log('kicik herf movcuddur');
        }
    }
    i++;
}





