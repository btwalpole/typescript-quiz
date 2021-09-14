import "../styles.css";

// Declaring type of props - see "Typing Component Props" for more examples
type TeamProps = {
    styles: React.CSSProperties;
    teamName: string;
    score: number;
    addFive: () => void;
    addTen: () => void;
    resetScore: () => void;
  }; /* use `interface` if exporting so that consumers can extend */


export default function Team({ styles, teamName, score, addFive, addTen, resetScore }: TeamProps): JSX.Element {
  return (
    <div className="team" style={styles}>
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

