import { Box, Grid, Hidden, Typography } from "@mui/material";
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
    name: "Car wash",
    amount: "60 PLN",
    date: "2022-09-10",
  },
];

const Dashboard = () => {
  const chartData = expenses.map((expense) => ({
    name: expense.name,
    amount: parseFloat(expense.amount),
  }));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" paddingBottom="50px">
        Dashboard
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} md={9}>
          <Box width="100%" maxWidth="900px" sx={{ marginLeft: "90px" }}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Box>
              <Typography variant="h5" paddingBottom="20px">
                Input data report:
              </Typography>
              {expenses.map((expense, index) => (
                <Typography key={index} sx={{ color: "#676767" }}>
                  {`${expense.name}: ${expense.amount}`}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};
export default Dashboard;
