'use client'

import { TableBody, TableCell, TableRow } from "@mui/material";
import { Planet } from "@/types/planet";
import { StyledTableRow } from "./styledComponents";

export default function DataTableBody( props: { data: Planet[] }) {
    return (
        <TableBody>
            {
                props.data.map((planet: Planet, i: number) => (
                    <StyledTableRow key={i}>
                        <TableCell>{planet.name}</TableCell>
                        <TableCell>{planet.mass}</TableCell>
                        <TableCell>{planet.distance_light_year}</TableCell>
                    </StyledTableRow>
                ))
            }
        </TableBody>
    )
}