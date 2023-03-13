import fs from "fs"
import {stdout} from "process"

const read = async () => {
    const streamIn = fs.createReadStream("src/streams/files/fileToRead.txt", "utf-8");
    let inf = "";
    streamIn.on("data", chunk => inf = inf + chunk);
    process.on("exit", code =>{
        if(code === 0){
            stdout.write(inf);
        }
        else{
            throw new Error ("Error!");
        }
    })
};