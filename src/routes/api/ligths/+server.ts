import {CONTROLLER_IP} from "$env/static/private";
export async function POST(requestEvent) {
  
  const {request} = requestEvent;
  const {mode} = await request.json()
  console.log(`Mode : ${mode}`);
  const url = mode === "day" ? "day": "night"
  const response = await fetch(`http://${CONTROLLER_IP}/${url}`,{
    method : "POST"
  });
  const postcodes = await response.json();
  return new Response("{}", { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function GET() {
  const response = await fetch(`http://${CONTROLLER_IP}/data`);
  const data = await response.json();
  return new Response(JSON.stringify(data), { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}