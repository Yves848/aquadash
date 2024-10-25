export const load = async(loadEvent) => {
  const {parent} = loadEvent;
   
  const {lights} = await parent();
  // const lights = await response.json();
  return { lights }
}