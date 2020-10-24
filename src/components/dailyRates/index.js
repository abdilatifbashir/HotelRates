import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DayRateContainer from "../../styles/day-rate";

const useStyles = makeStyles({
  table: {
    minWidth: 10,
  },
});

const DayRate = ({ dailyRates }) => {
  const { labelRate, todayBodyRate } = dailyRates;
  console.log(labelRate);
  const classes = useStyles();
  return (
    <DayRateContainer>
      <div>
        <TableContainer component={Paper} style={{ width: 1257 }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {labelRate.map((label, index) => (
                  <TableCell key={index.toString()}>{label}</TableCell>
                ))}
                {/* <TableCell></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {todayBodyRate?.map((current) => (
                <TableRow key={current.name}>
                  <TableCell align="right">
                    {current !== "null" && typeof current !== "undefined"
                      ? current
                      : ""}
                  </TableCell>
                  <TableCell align="right">
                    {current.todayRate !== "null" &&
                    typeof current.todayRate !== "undefined"
                      ? current
                      : ""}
                  </TableCell>
                </TableRow>
              ))}
              {/* {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </DayRateContainer>
  );
};
export default DayRate;
