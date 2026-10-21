import { Dog, DogData, mapDog } from "@/types/dog"

import { Redis } from "@upstash/redis"

const redis = Redis.fromEnv()

export async function GET() {

  const dogs = await getDogs(15)
  return Response.json({ dogs })
}


async function getDogs(pages: number) {

  const url = "https://api.api-ninjas.com/v1/dogs?min_height=1"

  let dogs: Dog[] = []

  for (let i = 0; i < pages; i++) {
    const offsetKey = "&offset=" + (i * 20)

    const result: Dog[] | null = await redis.get(offsetKey)

    if (result) {
      console.log(`Result found for key: ${offsetKey}`)
      // use the result
      dogs = [...dogs, ...result]
    }
    else {
      console.log(`Result not found for key: ${offsetKey}`)
      // sent a request
      const pageUrl = url + offsetKey
      const response = await fetch(pageUrl, { headers: { 'X-Api-Key': process.env.API_NINJA_KEY ?? "" } })
      const data: DogData[] = await response.json()
      const newDogs = data.map((item: DogData) => mapDog(item))
      // set the dogs in the cache
      redis.set(offsetKey, newDogs)
      dogs = [...dogs, ...newDogs]
    }

    
    
  }

  return dogs

}