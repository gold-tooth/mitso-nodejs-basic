import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    await fs.unlink(filePath, (err) =>
    {
        if (err)
        {
            throw new Error ("FS operation failed");
        }
        else
        {
            console.log("File was deleted");
        }
    });
};

await remove();