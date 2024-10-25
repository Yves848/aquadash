import { start_mongo } from "$lib/db/mongo";

console.log("Starting server...");

start_mongo().then((): void => {
  console.log("MongoDB started");
}).catch(() => {console.log("Error starting MongoDB")});