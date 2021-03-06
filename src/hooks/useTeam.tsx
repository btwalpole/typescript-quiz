import {useState} from 'react';

type TeamProps = {
    name: string
}

export default function useTeam({ name }: TeamProps): [string, number, () => void, () => void, () => void] {
  const [score, setScore] = useState(0);
  
  function addFive(): void {
      setScore(prev => prev + 5);
  }
  
  function addTen(): void {
    setScore(prev => prev + 10);
  }

  function resetScore() {
      setScore(0);
  }
  
  return [name, score, addFive, addTen, resetScore]
}