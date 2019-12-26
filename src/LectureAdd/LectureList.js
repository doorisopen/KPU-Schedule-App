import React , { Component } from "react";
import LectureItem from "./LectureItem";

class LectureList extends Component {

    render() {
        const { lectureItems, isItemAdd, lectureRemove } = this.props;

        return (
            lectureItems.map(lecture => (
            <LectureItem
                key={lecture.Item.lectureIdx}
                lectureIdx={lecture.Item.lectureIdx}
                lectureName={lecture.Item.lectureName}
                lectureSemester={lecture.Item.lectureSemester}
                lectureDate={lecture.Item.lectureDate}
                professorName={lecture.Item.professorName}
                lectureCode={lecture.Item.lectureCode}
                lectureRemove={lectureRemove}
                isItemAdd={isItemAdd}
            />
            ))
        );
    }

}

export default LectureList;