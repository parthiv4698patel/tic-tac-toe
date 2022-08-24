import React from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const handleClick = (num) => {
    alert(num);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>parthiv</td>;
  };

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToe;
