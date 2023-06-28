import { TableCell, TableHead, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  tableHeadRow: {
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  tableHeadCell: {
    fontWeight: "bold !important",
    fontSize: "19px !important",
  },
  tableCell: {
    width: "20%",
  },
});
const TableHeader = () => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow className={classes.tableHeadRow}>
        <TableCell className={`${classes.tableHeadCell} ${classes.tableCell}`}>
          Period
        </TableCell>
        <TableCell className={`${classes.tableHeadCell} ${classes.tableCell}`}>
          Category
        </TableCell>
        <TableCell className={`${classes.tableHeadCell} ${classes.tableCell}`}>
          Name
        </TableCell>
        <TableCell className={`${classes.tableHeadCell} ${classes.tableCell}`}>
          Amount
        </TableCell>
        <TableCell className={`${classes.tableHeadCell} ${classes.tableCell}`}>
          Date
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
