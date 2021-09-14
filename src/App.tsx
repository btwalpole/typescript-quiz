import Team from "./components/Team";
import  useTeam  from "./hooks/useTeam"
import CategoriesGrid from "./components/CategoriesGrid";
import "./styles.css";
import React from "react";

export default function App(): JSX.Element{
  const [teamAName, teamAScore, teamAAddFive, teamAAddTen, teamAResetScore ] = useTeam({name: 'Coolest Team'});
  const [teamBName, teamBScore, teamBAddFive, teamBAddTen, teamBResetScore ] = useTeam({name: 'Cooler Team'});

  let stylesA = {};
  let stylesB = {};

  const winningStyles: React.CSSProperties = {
    border: '4px solid green',
  }

  if(teamAScore > teamBScore) {
    stylesA = winningStyles;
  } else if (teamBScore > teamAScore)  {
    stylesB = winningStyles;
  }


  return (
    <div className="App">
      <h1 className="heading">EPIC QUIZ</h1>
      <div className="teams-container">
        <Team styles={stylesA} teamName={teamAName} score={teamAScore} addFive={teamAAddFive} addTen={teamAAddTen} resetScore={teamAResetScore}/>
        <Team styles={stylesB} teamName={teamBName} score={teamBScore} addFive={teamBAddFive} addTen={teamBAddTen} resetScore={teamBResetScore}/>
      </div>
      <CategoriesGrid />
    </div>
  );
}