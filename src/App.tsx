import Team from "./components/Team";
import CategoriesGrid from "./components/CategoriesGrid";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">EPIC QUIZ</h1>
      <div className="teams-container">
        <Team teamName="Team A" />
        <Team teamName="Team B" />
      </div>
      <CategoriesGrid />
    </div>
  );
}
