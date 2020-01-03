import React , { Component } from "react";
import LectureRemoveButton from "./LectureRemoveButton";
import "../Lecture.css";

class LectureItem extends Component {
    render() {
        const {
            lectureIdx,
            lectureName,
            lectureSemester,
            lectureDate,
            lectureLocation,
            professorName,
            lectureCode,
            lectureRemove,
            currentLectures
        } = this.props;

        return (
            <tr className="lecture">
                <td>{lectureIdx}</td>
                <td>{lectureCode}</td>
                <td>{lectureName}</td>
                <td>{lectureSemester}</td>
                <td>{lectureDate}</td>
                <td>{lectureLocation}</td>
                <td>{professorName}</td>
                <td>
                <LectureRemoveButton 
                    lectureIdx={lectureIdx}
                    lectureRemove={lectureRemove}
                    currentLectures={currentLectures}
                />
                </td>
            </tr>
        );
    }
}
export default LectureItem;