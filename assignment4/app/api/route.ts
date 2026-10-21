import { Dog, DogData, mapDog } from "@/types/dog"


export async function GET() {

  const dogs = await getDogs(2)

  return Response.json({ dogs })
}



async function getDogs(pages: number) {

  const url = "https://api.api-ninjas.com/v1/dogs?min_height=1"

  let dogs: Dog[] = []

  for (let i = 0; i < pages; i++) {
    const pageUrl = url + "&offset=" + (i*20)
    const response = await fetch(pageUrl, { headers: { 'X-Api-Key': process.env.API_NINJA_KEY ?? "" } })
    const data: DogData[] = await response.json()
    dogs = [...dogs, ...data.map((item: DogData) => mapDog(item))]
  }

  return dogs

}