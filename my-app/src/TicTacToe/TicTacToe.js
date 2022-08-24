import React from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const handleClick = () => {
    alert("test");
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick()}></td>;
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
