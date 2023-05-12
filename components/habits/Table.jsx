import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as UTIL from "@/util";
import Input from "./Input";

// function createData(key, date, amount, percent, improve, reserve, learn) {
//   return { key, date, amount, percent, improve, reserve, learn };
// }
export default function BasicTable({ items, totalAmount, updateTodaysHabit }) {
  const createData = (data) => {
    const { date, amount, improve, reserve, learn } = data;
    return {
      //   date: UTIL.getDateStrIsrael(date),
      date: date,
      amount,
      percent: ((amount / totalAmount) * 100).toFixed(0),
      improve,
      reserve,
      learn,
    };
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>key</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">
              {" "}
              date
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">
              amount
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">
              completed&nbsp;(%)
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">
              improve
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">
              reserve
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">
              learn
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items
            .map((data) => createData(data))
            .map((row, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{key + 1}</TableCell>
                <TableCell align="left">
                  {UTIL.getDateStrIsrael(row.date)}
                </TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.percent}</TableCell>

                <TableCell align="left">
                  <Input
                    name="improve"
                    disabled={!UTIL.datesAreEquals(row.date, new Date())}
                    value={row.improve}
                    onChange={(e) => {
                      updateTodaysHabit(e.target, key);
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <Input
                    name="reserve"
                    disabled={!UTIL.datesAreEquals(row.date, new Date())}
                    value={row.reserve}
                    onChange={(e) => {
                      updateTodaysHabit(e.target, key);
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <Input
                    name="learn"
                    disabled={!UTIL.datesAreEquals(row.date, new Date())}
                    value={row.learn}
                    onChange={(e) => {
                      updateTodaysHabit(e.target, key);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
