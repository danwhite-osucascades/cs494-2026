import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableRow = styled(TableRow)({

    "&:nth-of-type(odd)": {
        "& .MuiTableCell-root": {
            backgroundColor: "#ccc"
        }
    },
})

export const StyledTableHeadRow = styled(TableRow)({
    "& .MuiTableCell-root": {
        backgroundColor: "#000",
        color: "white"
    }
})