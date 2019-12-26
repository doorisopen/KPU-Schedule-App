import React from "react";

const LectureRemoveButton = ({lectureIdx, lectureRemove}) => {
    return (
        <button onClick={(event) => {
            console.log(lectureIdx +" Remove Complete!!");
            event.stopPropagation();
            lectureRemove(lectureIdx);
        }}
        >&times;</button>
    );
};

export default LectureRemoveButton;