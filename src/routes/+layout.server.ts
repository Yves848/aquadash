export const load = async(loadEvent) => {
  const {fetch} = loadEvent;
   const  response = await fetch('api/ligths',{
    // mode: 'cors',
    headers: {
      "content-type": "application/json"
    }
  });
  // console.log(response);
  const lights = await response.json();
  return { lights }
}