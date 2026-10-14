'use client'

import { TableContainer, Table, Box, TextField } from "@mui/material";
import DataTableBody from "./dataTableBody";
import DataTableHead from "./dataTableHead";
import { Planet } from "@/types/planet";

import { useState, useEffect } from "react";

import { filterObjectArrayByMinMax } from "@/utils/dataUtils";


export default function DataTable(props: { data: Planet[] }) {

    const [data, setData] = useState<Planet[]>(props.data)
    const [filteredData, setFilteredData] = useState<Planet[]>(props.data)
    const [min, setMin] = useState<string>("0")


    let tmpMax = 0
    for (let i = 0; i < props.data.length; i++){
        if (props.data[i].mass > tmpMax){
            tmpMax = props.data[i].mass
        }
    }

    const [max, setMax] = useState<string>(String(tmpMax))

    useEffect(()=>{

        setFilteredData(filterObjectArrayByMinMax("mass", data, parseFloat(min), parseFloat(max)))

    },[min, max, data])


    return (
        <Box>
            <TextField type="text" value={min} onChange={(event)=>setMin(event.target.value)} />
            <TextField type="text" value={max} onChange={(event)=>setMax(event.target.value)} />
            <TableContainer>
                <Table>
                    <DataTableHead data={data} setData={setData} />
                    <DataTableBody data={filteredData} />
                </Table>
            </TableContainer>
        </Box>


    )
}