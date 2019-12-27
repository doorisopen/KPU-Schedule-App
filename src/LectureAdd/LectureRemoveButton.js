import React from "react";

const LectureRemoveButton = ({currentLectures, lectureIdx, lectureRemove}) => {
    
    return (
        <button onClick={(event) => {
            const index = currentLectures.findIndex(lecture => 
                lecture.lectureIdx === lectureIdx);
            currentLectures[index].selected = false;

            lectureRemove(lectureIdx);
        }}
        >&times;</button>
    );
};

export default LectureRemoveButton;