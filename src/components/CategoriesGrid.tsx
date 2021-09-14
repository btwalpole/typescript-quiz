import Card from "./Card";
import topics from "../topics.json";
import "../styles.css";

function CategoriesGrid() {
  return (
    <div className="grid-container">
      {topics.map((topic) => (
        <Card key={topic} topic={topic} />
      ))}
    </div>
  );
}

export default CategoriesGrid;
