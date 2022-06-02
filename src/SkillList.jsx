import SkillListItem from "./SkillListItem";
import './SkillList.css';

function SkillList({ devSkills }) {
    return (
        <ul className="SkillList">
            {devSkills.map((skill, idx) => (<SkillListItem name={skill.name} level={skill.level} key={idx} />))}
        </ul>
    )

};

export default SkillList;