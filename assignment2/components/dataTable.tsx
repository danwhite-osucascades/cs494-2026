'use client'

import { TableContainer, Table, Box, Button } from "@mui/material";
import DataTableBody from "./dataTableBody";
import DataTableHead from "./dataTableHead";
import { Planet } from "@/types/planet";

import { useEffect, useState } from "react";

export default function DataTable(props: { data: Planet[] }) {

    const [data, setData] = useState<Planet[]>(props.data)


    return (
        <TableContainer>
            <Table>
                <DataTableHead data={data} setData={setData}/>
                <DataTableBody data={data} />
            </Table>
        </TableContainer>

    )
}