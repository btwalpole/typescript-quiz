import {useState} from 'react';

type TeamProps = {
    name: string
}

export default function useTeam(props: TeamProps) {
  const [score, setScore] = useState(0);
  const name = props.name;

  function addFive() {
      setScore(prev => prev + 5);
  }

  function addTen() {
    setScore(prev => prev + 10);
}

function resetScore() {
    setScore(0);
}

  return [name, score, addFive, addTen, resetScore]
}