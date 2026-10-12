import { TableHead, TableCell } from "@mui/material";

import { StyledTableHeadRow } from "./styledComponents";

export default function DataTableHead() {
    return (
        <TableHead>
            <StyledTableHeadRow>
                <TableCell>Name</TableCell>
                <TableCell>Mass (Relative to Jupiter)</TableCell>
                <TableCell>Radius</TableCell>
                <TableCell>Distance From Earth</TableCell>
                <TableCell>Orbital Period (Earth Days)</TableCell>
                <TableCell>Temperature (K)</TableCell>
            </StyledTableHeadRow>
        </TableHead>
    )
}