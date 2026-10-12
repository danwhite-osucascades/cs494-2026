import { TableHead, TableCell, Button } from "@mui/material";

import { StyledTableHeadRow } from "./styledComponents";
import { Planet } from "@/types/planet";
import { useState } from "react";

type StringProperties = "name"
type NumberProperties = "mass" | "radius"


export default function DataTableHead(props: { data: Planet[], setData: (data: Planet[]) => void }) {

    const [ascending, setAscending] = useState<boolean>(true)

    function sortByString(property: StringProperties): undefined {
        const tmpObj = JSON.parse(JSON.stringify(props.data))
        tmpObj.sort((a: Planet, b: Planet) => {
            const nameA = a[property].toUpperCase()
            const nameB = b[property].toUpperCase()

            if (nameA < nameB) return ascending ? -1 : 1
            else if (nameA > nameB) return ascending ? 1 : -1

            return 0
        })

        props.setData(tmpObj)
        setAscending(!ascending)
    }

    function sortByNumber(property: NumberProperties) {
        const tmpObj = JSON.parse(JSON.stringify(props.data))
        if (ascending) {
            tmpObj.sort((a: Planet, b: Planet) => a[property] - b[property]);
        }
        else {
            tmpObj.sort((a: Planet, b: Planet) => b[property] - a[property]);
        }


        props.setData(tmpObj)
        setAscending(!ascending)
    }


    return (
        <TableHead>
            <StyledTableHeadRow>
                <TableCell><Button variant="text" onClick={() => sortByString("name")}>Name</Button></TableCell>
                <TableCell><Button variant="text" onClick={() => sortByNumber("mass")}>Mass</Button></TableCell>
                <TableCell>Radius</TableCell>
                <TableCell>Distance From Earth</TableCell>
                <TableCell>Orbital Period (Earth Days)</TableCell>
                <TableCell>Temperature (K)</TableCell>
            </StyledTableHeadRow>
        </TableHead>
    )
}