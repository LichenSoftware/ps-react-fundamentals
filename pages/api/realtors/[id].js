import path from "path";
import fs from "fs";
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {
  const id = parseInt(req?.query?.id);
  const jsonFile = path.resolve("./", "realtors.json");
  const readFileData = await readFile(jsonFile);
  await delay(1000);
  const realtors = JSON.parse(readFileData).realtors;
  const realtor = realtors.find((rec) => rec.id === id);
  if (realtor) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(realtor);
  } else {
    res.status(404).send("realtor not found");
  }
  console.log(`GET /api/realtors/${id} status: 200`);
}
