
// Gebruikersbestand vereist
const fs = require('fs');
const { json } = require('stream/consumers');

const newUser = 
    {"icon":"B","name":"Benji","comment":"Er is een verborgen blauwdruk in de doemachtige uitdaging van de zwarte eenden. Met de blauwdruk kun je vrijwel geforceerde choke gebruiken.", "color":"red"};



// append to existing json file in same object
let fileData = JSON.parse(fs.readFileSync('../g-labs-blog/src/assets/usersComment.json'));
// push new object inside
fileData.push(newUser);
// wrtie to the file
fs.writeFileSync('../g-labs-blog/src/assets/usersComment.json',JSON.stringify(fileData, null, 2));


