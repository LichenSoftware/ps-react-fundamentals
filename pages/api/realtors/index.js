import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const method = req?.method;
  const jsonFile = path.resolve("./", "realtors.json");
  const readFileData = await readFile(jsonFile);
  const realtors = JSON.parse(readFileData).realtors;
  await delay(1000);

  switch (method) {
    case "GET":
      try {
        if (!realtors) {
          res.status(404).send("Error: Request failed with status code 404");
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).send(JSON.stringify(realtors, null, 2));
          console.log("GET /api/realtors  status: 200");
        }
      } catch (e) {
        console.log("/api/realtors error:", e);
      }
      break;

    case "POST":
      try {
        const recordFromBody = req?.body;
        recordFromBody.id = Math.max(...realtors.map((h) => h.id)) + 1;
        const newRealtorsArray = [...realtors, recordFromBody];
        writeFile(
          jsonFile,
          JSON.stringify(
            {
                realtors: newRealtorsArray,
            },
            null,
            2
          )
        );
        res.status(200).json(recordFromBody);
        console.log(`POST /api/realtors status: 200`);
      } catch (e) {
        console.log("/api/realtors POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
