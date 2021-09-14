import Card from "./Card";
import topics from "../topics.json";
import "../styles.css";

export default function CategoriesGrid(): JSX.Element {
  return (
    <div className="grid-container">
      {topics.map((topic) => (
        <Card key={topic} topic={topic} />
      ))}
    </div>
  );
}