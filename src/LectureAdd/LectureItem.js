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
            professorName,
            lectureCode,
            lectureRemove
        } = this.props;

        return (
            <tr className="lecture">
                <td>{lectureIdx}</td>
                <td>{lectureCode}</td>
                <td>{lectureName}</td>
                <td>{lectureSemester}</td>
                <td>{lectureDate}</td>
                <td>{professorName}</td>
                <td>
                <LectureRemoveButton 
                    lectureIdx={lectureIdx}
                    lectureRemove={lectureRemove}
                />
                </td>
            </tr>
        );
    }
}
export default LectureItem;