import fs from "fs/promises";
import url from "url";
import {createHash, createHmac} from "crypto";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))
const filepath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");


const calculateHash = async () => { 
    let date = await fs.readFile(filepath);
    console.log(createHmac('sha256', date).update(date).digest('hex'));
};

await calculateHash();