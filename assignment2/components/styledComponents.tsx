import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableRow = styled(TableRow)({
    "&:nth-of-type(odd)": {
        backgroundColor: "#ccc"
    }
})
