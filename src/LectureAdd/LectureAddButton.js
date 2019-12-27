import React from "react";

const LectureAddButton = ({currentLectures, lectureItem, lectureAdd}) => {

    return (
        <button onClick={(event) => {
            // 선택된 데이터의 Index 찾는다.
            const index = currentLectures.findIndex(lecture => 
                lecture.lectureIdx === lectureItem.Item.lectureIdx);
            currentLectures[index].selected = true;

            // lectureItem 추가 및 배열 갱신
            lectureAdd(lectureItem);
        }}
        disabled={lectureItem.Item.selected}>추가</button>
    );
};

export default LectureAddButton;