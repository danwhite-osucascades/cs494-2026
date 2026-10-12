'use client'

import { TableContainer, Table, Box, Button } from "@mui/material";
import DataTableBody from "./dataTableBody";
import DataTableHead from "./dataTableHead";
import { Planet } from "@/types/planet";

type StringProperties = "name" | "temperature"

export default function DataTable(props: { data: Planet[] }) {

    const copyData = JSON.parse(JSON.stringify(props.data))

    let ascending = true

    function sortByString(data: Planet[], property: StringProperties): undefined {
        data.sort((a: Planet, b: Planet) => {
            const nameA = a[property].toUpperCase()
            const nameB = b[property].toUpperCase()

            if (nameA < nameB) return ascending ? -1 : 1
            else if (nameA > nameB) return ascending ? 1 : -1

            return 0
        })

        console.log(data)

        ascending = !ascending
    }


    return (
        <Box>
            <Button variant="contained" sx={{m: 1}} onClick={()=>sortByString(copyData, "name")}>Sort By Name</Button>
            <TableContainer>
                <Table>
                    <DataTableHead />
                    <DataTableBody data={copyData} />
                </Table>
            </TableContainer>
        </Box>

    )
}