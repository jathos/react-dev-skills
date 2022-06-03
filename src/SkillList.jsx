import Student from "./SkillListItem";

function StudentList({ students }) {
    return (
        <div>
            {students.map((ele, idx) => <Student student={ele} key={idx} />)}
        </div>
    );
};

export default StudentList;