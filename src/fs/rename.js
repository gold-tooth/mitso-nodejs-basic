import fs from "fs/promises";
import path from "path";
import * as url from "url";

let __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const filePath = path.join(__dirname, "files", "wrongFilename.txt");
const newfilePath = path.join(__dirname, "files", "properFilename.txt");


const rename = async () => {
    let inf = await fs.rename(filePath, newfilePath, (err) =>
    {
        if (err)
        {
            throw new error ("FS operation failed");
        }
        else
        {
            console.log("files was rename");
        }
    });
};

await rename();