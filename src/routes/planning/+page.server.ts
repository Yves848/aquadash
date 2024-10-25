import { plannings } from "$lib/db/plannings";
import { json } from "@sveltejs/kit";
// import type { PageServerLoad } from "./$types";

export const load  = async () => {  
  const data = await plannings.find({}).sort({joursemaine : 1, heure : 1}).toArray();
  console.log(data);
  return {
      plannings: JSON.parse(JSON.stringify(data))
  };
};