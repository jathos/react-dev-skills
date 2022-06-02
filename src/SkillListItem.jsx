import './SkillListItem.css'

function SkillListItem({ name, level }) {
    return (
        < li className="SkillListItem">{name} <span className="level">{level}</span></li >
    )
};

export default SkillListItem;