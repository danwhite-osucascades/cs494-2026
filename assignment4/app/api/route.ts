

export async function GET() {

  const dogs = await getDogs()

  return Response.json({ message: dogs[0].name })
}



async function getDogs() {
  const url = "https://api.api-ninjas.com/v1/dogs?min_height=1"
  const response = await fetch(url, { headers: { 'X-Api-Key': process.env.API_NINJA_KEY ?? "" } })
  const data: any = await response.json()

  return data
}