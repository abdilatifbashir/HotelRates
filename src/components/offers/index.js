import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import OfferRateContainer from "../../styles/offers";

const useStyles = makeStyles({
  table: {
    minWidth: 10,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const OfferRate = ({ offersDetails }) => {
  const classes = useStyles();
  const { labelRate, offerType } = offersDetails;
  console.log(offerType);
  return (
    <OfferRateContainer>
      <div>
        <TableContainer component={Paper} style={{ width: 600, height: 350 }}>
          <h5>Rates We can Offer</h5>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {labelRate.map((label, index) => (
                  <TableCell key={index.toString()}>{label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {offerType.map((offer) => (
                <TableRow key={offer.type}>
                  <TableCell>{offer.type}</TableCell>
                  <TableCell>{offer.lowest}</TableCell>
                  <TableCell>{offer.standard}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </OfferRateContainer>
  );
};
export default OfferRate;
