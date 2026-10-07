import { TableBody, TableCell, TableRow } from "@mui/material";

import { Planet } from "@/types/planet";

export default function DataTableBody( props: { data: Planet[] }) {
    return (
        <TableBody>
            {
                props.data.map((planet: Planet, i: number) => (
                    <TableRow key={i}>
                        <TableCell>{planet.name}</TableCell>
                        <TableCell>{planet.mass}</TableCell>
                        <TableCell>{planet.distance_light_year}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
}