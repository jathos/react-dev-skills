import './NewSkillForm.css';
import { useState } from "react";

function NewSkillForm({ addNewSkill }) {
    const [newSkill, setNewSkill] = useState({
        name: "",
        level: 3
    });

    function handleAddNewSkill(evt) {
        evt.preventDefault();
        const newSkillData = { [evt.target[0].name]: evt.target[0].value, [evt.target[1].name]: evt.target[1].value }
        console.log(newSkillData)
        addNewSkill(newSkillData);
        setNewSkill({
            name: "",
            level: 3
        });
    };

    return (
        <form className="NewSkillForm" onSubmit={handleAddNewSkill}>
            <label>Skill</label>
            <input name="name" value={newSkill.name} onChange={(evt) => setNewSkill(evt.target.value)} type="textfield"></input>
            <label>Level</label>
            <select name="level" value={newSkill.level} onChange={(evt) => setNewSkill(evt.target.value)} required>
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