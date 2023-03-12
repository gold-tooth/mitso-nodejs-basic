import fs from "fs/promises";
import * as url from "url";
let __dirname = url.fileURLToPath(new URL(".", import.meta.url));


const list = async () => {
    let file = await fs.readdir(`${__dirname}files`, (err) =>
    {
        if (err)
        {
            throw new error ("FS operation failed");
        }
        else
        {
            console.log("Ура данные будут!!!!");
        }
    }); 

    console.log(file);
};

await list();