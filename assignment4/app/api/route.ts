import { Dog, DogData, mapDog } from "@/types/dog"


export async function GET() {

  const dogs = await getDogs()

  return Response.json({ dogs })
}



async function getDogs() {
  const url = "https://api.api-ninjas.com/v1/dogs?min_height=1"
  const response = await fetch(url, { headers: { 'X-Api-Key': process.env.API_NINJA_KEY ?? "" } })
  const data: DogData[] = await response.json()

  return data.map((item: DogData)=>mapDog(item))
}