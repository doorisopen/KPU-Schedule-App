import React from "react";
import PropTypes from "prop-types";
import LectureAddButton from "./LectureAdd/LectureAddButton";
import "./Lecture.css";

function Lecture({
     lectureIdx,
     lectureName,
     lectureSemester,
     lectureDate,
     professorName,
     lectureCode,
     lectureAdd,
     currentLectures
    }) {
    
    const lectureItem = {
    Item: {
        lectureIdx: lectureIdx,
        lectureName: lectureName,
        lectureSemester: lectureSemester,
        lectureDate: lectureDate,
        professorName: professorName,
        lectureCode: lectureCode,
        selected: false
    }};

    return (
        <tr className="lecture">
            <td>{lectureItem.Item.lectureIdx}</td>
            <td>{lectureItem.Item.lectureCode}</td>
            <td>{lectureItem.Item.lectureName}</td>
            <td>{lectureItem.Item.lectureSemester}</td>
            <td>{lectureItem.Item.lectureDate}</td>
            <td>{lectureItem.Item.professorName}</td>
            <td>
            <LectureAddButton
                key={lectureItem.Item.lectureIdx}
                lectureItem={lectureItem}
                lectureAdd={lectureAdd}
                currentLectures={currentLectures}
            />
            </td>
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