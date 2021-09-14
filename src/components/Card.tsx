import { useState } from "react";
import "../styles.css";

// Declaring type of props - see "Typing Component Props" for more examples
type Props = {
    topic: string;
  }; /* use `interface` if exporting so that consumers can extend */

export default function Card({ topic }: Props): JSX.Element {
  const [isCompleted, setIsCompleted] = useState(false);

  const styles={
    textDecoration: isCompleted && "line-through",
    backgroundColor: isCompleted && "#BC3908"
  } as React.CSSProperties;

  return (
    <div
      className="item"
      style={styles}
      onClick={() => setIsCompleted((prev) => !prev)}
    >
      <p>{topic}</p>
    </div>
  );
}

