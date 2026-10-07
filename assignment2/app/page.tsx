import { Box, Card, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"


type Planet = {
  name: string,
  mass: number,
  distance_light_year: number
}

export default async function Home() {

  const url = "https://api.api-ninjas.com/v1/planets?max_distance_light_year=10"
  const response = await fetch(url, {headers: {'X-Api-Key' : process.env.API_NINJA_KEY ?? "" }})
  const data: Planet[] = await response.json()

  return (
    <main>
      <Card>
        <Typography sx={{ m: 2, p: 3, color: "red" }} variant="h2" component="h3">
          Here's a cool table about the planets!
        </Typography>
      </Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Mass</TableCell>
              <TableCell>Distance From Earth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((planet: Planet, i: number)=>(
                <TableRow key={i}>
                  <TableCell>{planet.name}</TableCell>
                  <TableCell>{planet.mass}</TableCell>
                  <TableCell>{planet.distance_light_year}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}
