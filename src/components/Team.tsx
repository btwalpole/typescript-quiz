import { useState } from "react";
import "../styles.css";

// Declaring type of props - see "Typing Component Props" for more examples
type Props = {
    teamName: string;
    score: number;
    addFive: () => void;
    addTen: () => void;
    resetScore: () => void;
  }; /* use `interface` if exporting so that consumers can extend */


function Team({ teamName, score, addFive, addTen, resetScore }: Props) {

  return (
    <div className="team">
      <h2>{teamName}</h2>
      <h3 className="score">Points: {score}</h3>
      <div className="button-container">
        <button onClick={addTen}>+10</button>
        <button onClick={addFive}>+5</button>
        <button onClick={resetScore}>Reset</button>
      </div>
    </div>
  );
}

export default Team;
