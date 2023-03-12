import fs from "fs/promises";
import path from "path";
import * as url from "url";

let __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRead.txt");


const read = async () => {
    let inf = await fs.readFile(filePath,"utf8", (err) =>
    {
        if (err)
        {
            throw new error ("FS operation failed");
        }
        else
        {
            console.log("files was readen");
        }
    });
    console.log(inf); 
};

await read();