import React from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const Cell = () => {
    return <td>parthiv</td>;
  };
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </tr>
          <tr>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </tr>
          <tr>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToe;
