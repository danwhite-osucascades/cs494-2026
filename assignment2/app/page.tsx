import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"

import { Planet } from "@/types/planet"
import DataTableBody from "@/components/dataTableBody"

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
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Mass</TableCell>
              <TableCell>Distance From Earth</TableCell>
            </TableRow>
          </TableHead>
          <DataTableBody data={data}/>
        </Table>
      </TableContainer>
    </main>
  );
}
