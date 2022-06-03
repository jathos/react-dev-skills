import Scores from "./NewSkillForm";

function Student({ student }) {
    return (
        <>
            <h2>Name: {student.name}</h2>
            <p><span style={{ fontWeight: "bold" }}>Bio:</span>{student.bio}</p>
            <p style={{ fontWeight: "bold" }}>Scores:</p>
            <ul>
                {student.scores.map((ele, idx) => <Scores score={ele} key={idx} />)}
            </ul>
            <hr></hr>
        </>
    )
};

export default Student;