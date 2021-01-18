const fs = require('fs');
fs.readFile("./demo", 'utf-8', (err, doc) => {
    if (err == null) {
        console.log(doc)
    }
});