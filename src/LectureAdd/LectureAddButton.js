import React from "react";

const LectureAddButton = ({lectureItem, currentLectures, lectureAdd}) => {

    return (
        <button onClick={(event) => {
            
            // const index = currentLectures.findIndex(lecture => lecture.lectureIdx === lectureItem.Item.lectureIdx);
            // const selectedLecture = currentLectures[index];
            // const unSelectedLectures = [...currentLectures];

            // console.log("Add Complete!! -> "+ lectureItem.Item.lectureName);
            // console.log("Selected Lecture -> " + JSON.stringify(selectedLecture));
            // console.log("Selected Lecture -> " + JSON.stringify(unSelectedLectures));


            // lectureItem 추가 및 배열 갱신
            lectureAdd(lectureItem);
        }}
        disabled={lectureItem.Item.selected}>추가</button>
    );
};

export default LectureAddButton;