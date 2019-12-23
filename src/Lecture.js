import React from "react";
import PropTypes from "prop-types";
import "./Lecture.css";

function lectureAdd(lectureName) {
    // const lecture = [];
    console.log(lectureName.lectureName+" Add");
}

function Lecture({lectureIdx,
     lectureName,
     lectureSemester,
     lectureDate,
     professorName,
     lectureCode
    }) {
    return (
        <tr className="lecture">
            <td>{lectureIdx}</td>
            <td>{lectureCode}</td>
            <td>{lectureName}</td>
            <td>{lectureSemester}</td>
            <td>{lectureDate}</td>
            <td>{professorName}</td>
            <td><button onClick={event => {lectureAdd({lectureName});}}>과목선택</button></td>
        </tr>
    );
}

// http://13.125.253.127:8080/kpu-schedule/lectureLoading/G
Lecture.propTypes = {
    lectureIdx: PropTypes.string.isRequired,
    // lectureGubun: PropTypes.string.isRequired,
    lectureName: PropTypes.string.isRequired,
    // code: PropTypes.string.isRequired,
    lectureYear: PropTypes.string.isRequired,
    lectureSemester: PropTypes.string.isRequired,
    // lectureDate: PropTypes.string.isRequired,
    professorName: PropTypes.string.isRequired,
    lectureCode: PropTypes.string.isRequired
};

export default Lecture;