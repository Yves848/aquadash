export async function POST(requestEvent) {
  
  const {request} = requestEvent;
  const {mode} = await request.json()
  console.log(`Mode : ${mode}`);
  const response = await fetch(`http://localhost:8080/${mode}`,{
    method : "POST"
  });
  return new Response("{}", { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}