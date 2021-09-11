import { useState } from "react";
import "../styles.css";

// Declaring type of props - see "Typing Component Props" for more examples
type Props = {
    teamName: string;
  }; /* use `interface` if exporting so that consumers can extend */


function Team({ teamName }: Props) {
  const [score, setScore] = useState(0);

  return (
    <div className="team">
      <h2>{teamName}</h2>
      <h3 className="score">Points: {score}</h3>
      <div className="button-container">
        <button onClick={() => setScore((prev) => prev + 10)}>+10</button>
        <button onClick={() => setScore((prev) => prev + 5)}>+5</button>
        <button onClick={() => setScore(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Team;
