import { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  createTheme,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import TableHeader from "../TableHeader/TableHeader";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";

const expenses = [
  {
    category: "Food",
    name: "Coffee",
    amount: "40 PLN",
    date: "2022-07-16",
  },
  {
    category: "Food",
    name: "Bread",
    amount: "8 PLN",
    date: "2022-08-03",
  },
  {
    category: "Food",
    name: "Cheese",
    amount: "21 PLN",
    date: "2022-08-03",
  },
  {
    category: "Fuel",
    name: "Car",
    amount: "320 PLN",
    date: "2022-08-14",
  },
  {
    category: "Food",
    name: "Bread",
    amount: "8 PLN",
    date: "2022-09-01",
  },
  {
    category: "Food",
    name: "Ham",
    amount: "14 PLN",
    date: "2022-09-01",
  },
  {
    category: "Food",
    name: "Butter",
    amount: "6 PLN",
    date: "2022-09-10",
  },
  {
    category: "Fuel",
    name: "Car",
    amount: "320 PLN",
    date: "2022-09-10",
  },
  {
    category: "Car wash",
    name: "Car",
    amount: "60 PLN",
    date: "2022-09-10",
  },
];

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
    maxHeight: "400px",
    overflowY: "scroll",
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#f5f5f5",
    },
    "&:hover": {
      backgroundColor: "#d0cef8",
      cursor: "pointer",
    },
  },
  filterInput: {
    width: "200px",
  },
  dissatisfiedIcon: {
    color: "#8884d8",
    fontSize: "24px",
  },
});

const Reports = () => {
  const classes = useStyles();

  const initialFilters = {
    period: "",
    category: "",
    name: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredExpenses = expenses.filter((expense) => {
    const periodMatch = expense.date.includes(filters.period);
    const categoryMatch = expense.category
      .toLowerCase()
      .includes(filters.category.toLowerCase());
    const nameMatch = expense.name
      .toLowerCase()
      .includes(filters.name.toLowerCase());

    return periodMatch && categoryMatch && nameMatch;
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" paddingBottom="30px">
        Reports
      </Typography>
      <Box mt={2}>
        <TextField
          name="period"
          label="Period"
          value={filters.period}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
          className={classes.filterInput}
        />
        <TextField
          name="category"
          label="Category"
          value={filters.category}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
          className={classes.filterInput}
        />
        <TextField
          name="name"
          label="Name"
          value={filters.name}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
          className={classes.filterInput}
        />
      </Box>
      <Divider />
      <Box mt={2} className={classes.tableContainer}>
        {filteredExpenses.length === 0 ? (
          <Box paddingTop="10px">
            <Typography>No reports found</Typography>
            <SentimentDissatisfiedOutlinedIcon
              className={classes.dissatisfiedIcon}
            />
          </Box>
        ) : (
          <TableContainer>
            <Table>
              <TableHeader />
              <TableBody>
                {filteredExpenses.map((expense, index) => (
                  <TableRow key={index} className={classes.tableRow}>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>{expense.name}</TableCell>
                    <TableCell>{expense.amount}</TableCell>
                    <TableCell>{expense.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};
export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#8884d8 !important",
            },
        },
      },
    },
  },
});

export default Reports;
