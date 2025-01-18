const fs = require("fs");

// Create new file
fs.writeFile("abc.txt", "This is the content in the file", (err) => {
    if(err) console.log(err);
    else console.log("file created");
});

// Read file
fs.readFile("abc.txt", "utf8", (err, data)=>{
    if(err) console.log(err);
    else console.log(data);
})

// Append file
fs.appendFile("abc.txt", " this is added text", (err)=>{
    if(err) console.log(err);
    else console.log("file appended");
}) 

// Rename file
fs.rename("abc.txt", "new.txt", (err)=>{
    if(err) console.log(err);
    else console.log("Renemed");    
})

// Delete file
fs.unlink("new.txt", (err)=>{
    if(err) console.log(err);
    else console.log("Deleted");    
})

// create folder
fs.mkdir("file", (err) => {
    if(err) console.log(err);
    else console.log("file created");
});

// read folder
fs.readdir("file", {withFileTypes: true}, (err, files)=>{
    if(err) console.log(err);
    else console.log(files);
})

// delete folder - older version -- gone deprecated
fs.rmdir("file-system-module",(err)=>{
    if(err) console.log(err);
    else console.log("deleted folder");
})

// delete folder - newer version
fs.rm("file-system-module", {recursive:true},(err)=>{
    if(err) console.log(err);
    else console.log("deleted folder");
})

// working with the synchronous apis
fs.readFileSync("new.txt", "Hello coder!");
console.log("File readed");
