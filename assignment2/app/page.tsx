import { Typography } from "@mui/material"

import { Planet } from "@/types/planet"
import DataTable from "@/components/dataTable"

export default async function Home() {

  const url = "https://api.api-ninjas.com/v1/planets?max_distance_light_year=1"
  const response = await fetch(url, {headers: {'X-Api-Key' : process.env.API_NINJA_KEY ?? "" }})
  const data: Planet[] = await response.json()

  return (
    <main>
      <Typography sx={{ m: 2, p: 3}} variant="h4">
        Here's a cool table about the planets!
      </Typography>
      {
        data.length > 0 ? 
        <DataTable data={data}/> :
        <div>Loading...</div>
      }
      
    </main>
  );
}
