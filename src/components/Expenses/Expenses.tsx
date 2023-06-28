import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography, Container, Grid } from "@mui/material";

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

const expensesByPeriod = expenses.reduce((result, expense) => {
  const period = expense.date.substring(0, 7);
  if (result[period]) {
    result[period] += parseFloat(expense.amount);
  } else {
    result[period] = parseFloat(expense.amount);
  }
  return result;
}, {});

const expensesByCategory = expenses.reduce((result, expense) => {
  const category = expense.category;
  if (result[category]) {
    result[category] += parseFloat(expense.amount);
  } else {
    result[category] = parseFloat(expense.amount);
  }
  return result;
}, {});

const formatDataForChart = (dataObject) => {
  return Object.entries(dataObject).map(([key, value]) => ({
    name: key,
    amount: value,
  }));
};

const dataByPeriod = formatDataForChart(expensesByPeriod);
const dataByCategory = formatDataForChart(expensesByCategory);

const totalExpense = expenses.reduce((total, expense) => {
  return total + parseFloat(expense.amount);
}, 0);

const Chart = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" paddingBottom="50px">
        Expenses Chart
      </Typography>
      <Grid item xs={12} sx={{ color: "#676767" }} paddingBottom="20px">
        <Typography variant="h6" sx={{ fontSize: "24px" }}>
          Summary
        </Typography>
        <Typography>Total: {totalExpense} PLN</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Expenses by Period</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataByPeriod}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Expenses by Category</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataByCategory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chart;
