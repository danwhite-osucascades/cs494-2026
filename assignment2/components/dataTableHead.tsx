'use client'

import { TableHead, TableRow, TableCell } from "@mui/material";

import { StyledTableHeadRow } from "./styledComponents";

export default function DataTableHead() {
    return (
        <TableHead>
            <StyledTableHeadRow>
                <TableCell>Name</TableCell>
                <TableCell>Mass</TableCell>
                <TableCell>Distance From Earth</TableCell>
            </StyledTableHeadRow>
        </TableHead>
    )
}