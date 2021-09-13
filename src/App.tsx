import Team from "./components/Team";
import  useTeam  from "./hooks/useTeam"
import CategoriesGrid from "./components/CategoriesGrid";
import "./styles.css";

export default function App() {
  const [teamAName, teamAScore, teamAAddFive, teamAAddTen, teamAResetScore ] = useTeam({name: 'Cool Team'});
  const [teamBName, teamBScore, teamBAddFive, teamBAddTen, teamBResetScore ] = useTeam({name: 'Cooler Team'});


  return (
    <div className="App">
      <h1 className="heading">EPIC QUIZ</h1>
      <div className="teams-container">
        <Team teamName={teamAName} score={teamAScore} addFive={teamAAddFive} addTen={teamAAddTen} resetScore={teamAResetScore}/>
        <Team teamName={teamBName} score={teamBScore} addFive={teamBAddFive} addTen={teamBAddTen} resetScore={teamBResetScore}/>
      </div>
      <CategoriesGrid />
    </div>
  );
}
