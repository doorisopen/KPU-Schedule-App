import React from "react";
import "../Lecture.css";

const LectureAddTemplate = ({ children }) => {

   return (
    <table>
        <thead>
        <tr>
            <th width="70">No</th>
            <th>강의코드</th>
            <th>강의명</th>
            <th width="70">학기</th>
            <th>강의시간</th>
            <th width="120">교수이름</th>
            <th width="120"></th>
        </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
   );
}

export default LectureAddTemplate;