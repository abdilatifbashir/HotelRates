import React from "react";
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
  const { labelRate, todayRateBody } = dailyRates;
  const classes = useStyles();
  return (
    <DayRateContainer>
      <div>
        <TableContainer component={Paper} style={{ width: 1250, height: 550 }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {labelRate.map((label, index) => (
                  <TableCell key={index.toString()}>{label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {todayRateBody.map((current) => (
                <TableRow>
                  <TableCell align="left" >{current.name}</TableCell>
                  <TableCell align="left">{`$${current.todayRate}`}</TableCell>
                  <TableCell align="left">{`$${current.competitorRate}`}</TableCell>
                  <TableCell align="left">{`$${current.difference}`}</TableCell>
                  <TableCell align="left" className={current.color}>
                    {current.ourRate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </DayRateContainer>
  );
};
export default DayRate;
