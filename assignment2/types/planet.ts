export type Planet = {
  name: string,
  mass: number,
  radius: number,
  distance_light_year: number,
  period: number,
  temperature: number
}

export type DataStringProperties = "name"

export type DataNumberProperties = "mass" | "radius" | "distance_light_year" | "period" | "temperature"