import { plannings } from "$lib/db/plannings";
import type { planningEntry } from "$const/const";
import {Dow} from "$const/const";

export const load  = async () => {  
  let planning  = new Map<number,planningEntry>();
  const data = await plannings.find({}).sort({joursemaine : 1, heure : 1}).toArray();
  let jour = 0;
  
  for (let i = 0; i <= 6; i++) {
    // console.log(i);
    const result = data.filter((item)=> {
      // console.log(`item : ${item.joursemaine}`);
      return (item.joursemaine === i)
    })
    // console.log(result);
    const entry : planningEntry = {start : result[0].heure, end: result[1].heure};
    planning.set(i,entry);

   }
  return {
      plannings: JSON.parse(JSON.stringify(data)),
      planning: planning
  };
};