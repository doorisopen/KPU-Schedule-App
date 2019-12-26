import React , { Component } from "react";
import LectureItem from "./LectureItem";

class LectureList extends Component {

    render() {
        const { lectureItems } = this.props;
        return (
            lectureItems.map(lecture => (
            <LectureItem 
                lectureIdx={lecture.lectureIdx}
                lectureName={lecture.lectureName}
                lectureSemester={lecture.lectureSemester}
                lectureDate={lecture.lectureDate}
                professorName={lecture.professorName}
                lectureCode={lecture.lectureCode}
            />
            ))
        );
    }

}
export default LectureList;