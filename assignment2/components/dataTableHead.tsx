import { TableHead, TableCell, Button } from "@mui/material";

import { StyledTableHeadRow } from "./styledComponents";
import { Planet, DataStringProperties, DataNumberProperties } from "@/types/planet";
import { useState } from "react";

import { sortObjectArrayByNumber, sortObjectArrayByString } from "@/utils/dataUtils";



export default function DataTableHead(props: { data: Planet[], setData: (data: Planet[]) => void }) {

    const [ascending, setAscending] = useState<boolean>(true)

    function sortByString(property: DataStringProperties){
        props.setData(sortObjectArrayByString(property, props.data, ascending))
        setAscending(!ascending)
    }

    function sortByNumber(property: DataNumberProperties){
        props.setData(sortObjectArrayByNumber(property, props.data, ascending))
        setAscending(!ascending)
    }

    return (
        <TableHead>
            <StyledTableHeadRow>
                <TableCell><Button variant="text" color="inherit" onClick={() => sortByString("name")}>Name</Button></TableCell>
                <TableCell><Button variant="text" color="inherit" onClick={() => sortByNumber("mass")}>Mass (Jupiters)</Button></TableCell>
                <TableCell><Button variant="text" color="inherit" onClick={() => sortByNumber("radius")}>Radius (Jupiters)</Button></TableCell>
                <TableCell><Button variant="text" color="inherit" onClick={() => sortByNumber("distance_light_year")}>Distance From Earth (ly)</Button></TableCell>
                <TableCell><Button variant="text" color="inherit" onClick={() => sortByNumber("period")}>Orbital Period (Earth Days)</Button></TableCell>
                <TableCell><Button variant="text" color="inherit" onClick={() => sortByNumber("temperature")}>Temperature (K)</Button></TableCell>
            </StyledTableHeadRow>
        </TableHead>
    )
}