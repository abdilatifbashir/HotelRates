import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import WeeklyRatesSection from "../../styles/week-rate";

const useStyles = makeStyles({
  table: {
    minWidth: 10,
  },
});

const WeeklyRates = ({ rate }) => {
  const [rateLabels, setRateLabels] = useState([]);
  const [rateBody, setRateBody] = useState([]);
  useEffect(() => {
    if (typeof rate.rateLabels !== "undefined") {
      setRateLabels(rate.rateLabels);
    }

    if (typeof rate.rateBody !== "undefined") {
      setRateBody(rate.rateBody);
    }
  }, [rate]);
  const classes = useStyles();
  console.log(rate);
  // const { rateLabels, rateBody } = rate;
  console.log("ratebody", rateBody);
  console.log("ratebody", rateLabels);
  return (
    <WeeklyRatesSection>
      <TableContainer component={Paper} style={{ width: 1257 }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            {/* {rateLabels.map((label, index) => (
              <TableRow key={index.toString()}>
                <TableCell>`{label}</TableCell>
              </TableRow>
            ))} */}
            <TableRow>
              {rateLabels.map((label) => (
                <TableCell>{label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rateBody.map((hotelRate) => (
              <TableRow key={hotelRate.name}>
                <TableCell component="th" scope="row">
                  {hotelRate.name}
                </TableCell>
                <TableCell align="right">
                  {hotelRate.day1 !== null &&
                  typeof hotelRate.day1.otherPrice &&
                  hotelRate.day1.compare !== "undefined" ? (
                    <span>
                      {`$${hotelRate.day1.otherPrice}`}&nbsp;&nbsp;&nbsp;
                      {hotelRate.day1.compare > 0 ? (
                        <span className="greater">
                          {`$${hotelRate.day1.compare}`}
                        </span>
                      ) : hotelRate.day1.compare === 0 ? (
                        <span className="equal">{`$${hotelRate.day1.compare}`}</span>
                      ) : hotelRate.day1.compare < 0 ? (
                        <span className="less">{`$${hotelRate.day1.compare}`}</span>
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell align="right">
                  {hotelRate.day2 !== null &&
                  typeof hotelRate.day2.otherPrice !== "undefined" ? (
                    <span>
                      {`$${hotelRate.day2.otherPrice}`}&nbsp;&nbsp;&nbsp;
                      {hotelRate.day2.compare > 0 ? (
                        <span className="greater">
                          {`$${hotelRate.day2.compare}`}
                        </span>
                      ) : hotelRate.day2.compare === 0 ? (
                        <span className="equal">{`$${hotelRate.day2.compare}`}</span>
                      ) : hotelRate.day2.compare < 0 ? (
                        <span className="less">{`$${hotelRate.day1.compare}`}</span>
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell align="right">
                  {hotelRate.day3 !== null &&
                  typeof hotelRate.day3.otherPrice !== "undefined" ? (
                    <span>
                      {`$${hotelRate.day3.otherPrice}`}&nbsp;&nbsp;&nbsp;
                      {hotelRate.day3.compare > 0 ? (
                        <span className="greater">
                          {`$${hotelRate.day3.compare}`}
                        </span>
                      ) : hotelRate.day3.compare === 0 ? (
                        <span className="equal">{`$${hotelRate.day3.compare}`}</span>
                      ) : hotelRate.day3.compare < 0 ? (
                        <span className="less">
                          {hotelRate.day3.compare.toString().split("")}
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell align="right">
                  {hotelRate.day4 !== null &&
                  typeof hotelRate.day4.otherPrice !== "undefined" ? (
                    <span>
                      {`$${hotelRate.day4.otherPrice}`}&nbsp;&nbsp;&nbsp;
                      {hotelRate.day4.compare > 0 ? (
                        <span className="greater">
                          {`$${hotelRate.day4.compare}`}
                        </span>
                      ) : hotelRate.day4.compare === 0 ? (
                        <span className="equal">{`$${hotelRate.day4.compare}`}</span>
                      ) : hotelRate.day3.compare < 0 ? (
                        <span className="less">{`$${hotelRate.day4.compare}`}</span>
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell align="right">
                  {hotelRate.day5 !== null &&
                  typeof hotelRate.day5.otherPrice !== "undefined" ? (
                    <span>
                      {`$${hotelRate.day5.otherPrice}`}&nbsp;&nbsp;&nbsp;
                      {hotelRate.day5.compare > 0 ? (
                        <span className="greater">
                          {`$${hotelRate.day5.compare}`}
                        </span>
                      ) : hotelRate.day5.compare === 0 ? (
                        <span className="equal">{`$${hotelRate.day5.compare}`}</span>
                      ) : hotelRate.day5.compare < 0 ? (
                        <span className="less">{`$${hotelRate.day5.compare}`}</span>
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell align="right">
                  {hotelRate.day6 !== null &&
                  typeof hotelRate.day6.otherPrice !== "undefined" ? (
                    <span>
                      {`$${hotelRate.day6.otherPrice}`}&nbsp;&nbsp;&nbsp;
                      {hotelRate.day6.compare > 0 ? (
                        <span className="greater">
                          {`$${hotelRate.day6.compare}`}
                        </span>
                      ) : hotelRate.day6.compare === 0 ? (
                        <span className="equal">{`$${hotelRate.day6.compare}`}</span>
                      ) : hotelRate.day6.compare < 0 ? (
                        <span className="less">{`$${hotelRate.day6.compare}`}</span>
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell align="right">
                  {hotelRate.day7 !== null &&
                  typeof hotelRate.day7.otherPrice !== "undefined" ? (
                    <span>
                      {`$${hotelRate.day7.otherPrice}`}&nbsp;&nbsp;&nbsp;
                      {hotelRate.day7.compare > 0 ? (
                        <span className="greater">
                          {`$${hotelRate.day7.compare}`}
                        </span>
                      ) : hotelRate.day7.compare === 0 ? (
                        <span className="equal">{`$${hotelRate.day7.compare}`}</span>
                      ) : hotelRate.day7.compare < 0 ? (
                        <span className="less">{`$${hotelRate.day7.compare}`}</span>
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </WeeklyRatesSection>
  );
};
export default WeeklyRates;
