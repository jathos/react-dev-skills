import './NewSkillForm.css';
import { useState } from "react";

function NewSkillForm() {
    const [formSkills, setFormSkills] = useState({
        name: "",
        level: 3
    })

    return (
        <form className="NewSkillForm">
            <label>Skill</label>
            <input value={formSkills.name} onChange={(evt) => setFormSkills(evt.target.value)} type="textfield"></input>
            <label>Level</label>
            <select value={formSkills.level} onChange={(evt) => setFormSkills(evt.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    )

}

export default NewSkillForm;