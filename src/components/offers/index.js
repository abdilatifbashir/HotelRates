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
                  <TableCell>{`$${offer.lowest}`}</TableCell>
                  <TableCell>{`$${offer.standard}`}</TableCell>
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
