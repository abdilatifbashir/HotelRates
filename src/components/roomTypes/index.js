import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import RoomRateContainer from "../../styles/room-types";

const useStyles = makeStyles({
  table: {
    minWidth: 10,
  },
});

const RoomRate = ({ roomDetails }) => {
  const classes = useStyles();
  const { labelRate, RateEachType } = roomDetails;
  return (
    <RoomRateContainer>
      <div>
        <TableContainer
          component={Paper}
          style={{ width: 600, height: 350, background: "#FFFFFF" }}
        >
          <h5>Our Rates Today</h5>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {labelRate.map((label) => (
                  <TableCell>{label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {RateEachType.map((room) => (
                <TableRow key={room.type}>
                  <TableCell>{room.type}</TableCell>
                  <TableCell>
                    {room.currentYear >= 0 ? (
                      <span>{`$${room.currentYear}`}</span>
                    ) : (
                      <span>{`-$${room.currentYear * -1}`}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {room.currentYear > 0 ? (
                      <span>{`$${room.lastYear}`}</span>
                    ) : (
                      <span>{`-$${room.lastYear * -1}`}</span>
                    )}
                  </TableCell>
                  {/* <TableCell>{`$${room.difference}`}</TableCell> */}
                  <TableCell>
                    {" "}
                    {room.difference >= 0 ? (
                      <span>{`$${room.difference}`}</span>
                    ) : (
                      <span>{`-$${room.difference * -1}`}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </RoomRateContainer>
  );
};
export default RoomRate;
