import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import { useState } from "react";



function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  function addNewSkill(skill) {
    setSkills([...skills, skill])
  }

  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>
      <SkillList devSkills={skills} />
      <hr></hr>
      <NewSkillForm addNewSkill={addNewSkill} />
    </div>
  );
}

export default App;
