import { Typography, TableContainer, Table } from "@mui/material"

import { Planet } from "@/types/planet"
import DataTableBody from "@/components/dataTableBody"
import DataTableHead from "@/components/dataTableHead"

export default async function Home() {

  const url = "https://api.api-ninjas.com/v1/planets?max_distance_light_year=10"
  const response = await fetch(url, {headers: {'X-Api-Key' : process.env.API_NINJA_KEY ?? "" }})
  const data: Planet[] = await response.json()

  return (
    <main>
      <Typography sx={{ m: 2, p: 3}} variant="h4">
        Here's a cool table about the planets!
      </Typography>
      <TableContainer>
        <Table>
          <DataTableHead />
          <DataTableBody data={data}/>
        </Table>
      </TableContainer>
    </main>
  );
}
