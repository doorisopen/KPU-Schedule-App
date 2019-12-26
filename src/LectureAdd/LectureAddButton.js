import React from "react";

const LectureAddButton = ({lectureItem}) => {

    return (
        <button onClick={event => {
            console.log(lectureItem.Item.lectureName+" Add Complete!!");
            // lectureItem 추가 및 배열 갱신
        }}
        >추가</button>
    );
};

export default LectureAddButton;