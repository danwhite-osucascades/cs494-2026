'use client'

import { TableContainer, Table, Box, TextField, Select, MenuItem } from "@mui/material";
import DataTableBody from "./dataTableBody";
import DataTableHead from "./dataTableHead";
import { Planet, DataNumberProperties } from "@/types/planet";

import { useState, useEffect } from "react";

import { filterObjectArrayByMinMax, getMax } from "@/utils/dataUtils";


export default function DataTable(props: { data: Planet[] }) {

    const [data, setData] = useState<Planet[]>(props.data)
    const [filteredData, setFilteredData] = useState<Planet[]>(props.data)
    const [min, setMin] = useState<string>("0")

    const filterLabels: DataNumberProperties[] = ["mass", "radius"]

    const [filterLabel, setFilterLabel] = useState<DataNumberProperties>(filterLabels[0])

    const tmpMax = getMax(data.map((planet)=>planet[filterLabel]))

    const [max, setMax] = useState<string>(String(tmpMax))

    useEffect(()=>{

        setFilteredData(filterObjectArrayByMinMax("mass", data, parseFloat(min), parseFloat(max)))

    },[min, max, data])


    return (
        <Box>
            <TextField type="text" value={min} onChange={(event)=>setMin(event.target.value)} />
            <TextField type="text" value={max} onChange={(event)=>setMax(event.target.value)} />
            <Select
                value={filterLabel}
                onChange={(event)=>setFilterLabel(event.target.value)}
            >
                {
                    filterLabels.map((value, i)=>(
                        <MenuItem value={value} key={i}>{value}</MenuItem>
                    ))
                }
            </Select>
            <TableContainer>
                <Table>
                    <DataTableHead data={data} setData={setData} />
                    <DataTableBody data={filteredData} />
                </Table>
            </TableContainer>
        </Box>


    )
}