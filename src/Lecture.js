import React , { Component } from "react";
import LectureAddButton from "./LectureAdd/LectureAddButton";
import "./Lecture.css";

class Lecture extends Component {

    render() {
        // 부모로 부터 받아온 prop
        const {
            lectureIdx,
            lectureName,
            lectureSemester,
            lectureDate,
            professorName,
            lectureCode,
            selected,
            lectureAdd,
            currentLectures
        } = this.props;

        // lecture를 하나의 Item 으로 만든다.
        const lectureItem = {
        Item: {
            lectureIdx: lectureIdx,
            lectureName: lectureName,
            lectureSemester: lectureSemester,
            lectureDate: lectureDate,
            professorName: professorName,
            lectureCode: lectureCode,
            selected: selected
        }};

    return (
        <tr className="lecture">
            <td>{lectureIdx}</td>
            <td>{lectureCode}</td>
            <td>{lectureName}</td>
            <td>{lectureSemester}</td>
            <td>{lectureDate}</td>
            <td>{professorName}</td>
            <td>
            <LectureAddButton
                currentLectures={currentLectures} // 전체 데이터
                lectureItem={lectureItem}         // 현재 데이터
                lectureAdd={lectureAdd}           // func(강의 Add)
            />
            </td>
        </tr>
    );
    }
}

// function Lecture({
//      lectureIdx,
//      lectureName,
//      lectureSemester,
//      lectureDate,
//      professorName,
//      lectureCode,
//      lectureAdd,
//      currentLectures
//     }) {
    
//     const lectureItem = {
//     Item: {
//         lectureIdx: lectureIdx,
//         lectureName: lectureName,
//         lectureSemester: lectureSemester,
//         lectureDate: lectureDate,
//         professorName: professorName,
//         lectureCode: lectureCode,
//         selected: false
//     }};

//     return (
//         <tr className="lecture">
//             <td>{lectureItem.Item.lectureIdx}</td>
//             <td>{lectureItem.Item.lectureCode}</td>
//             <td>{lectureItem.Item.lectureName}</td>
//             <td>{lectureItem.Item.lectureSemester}</td>
//             <td>{lectureItem.Item.lectureDate}</td>
//             <td>{lectureItem.Item.professorName}</td>
//             <td>
//             <LectureAddButton
//                 key={lectureItem.Item.lectureIdx}
//                 lectureItem={lectureItem}
//                 lectureAdd={lectureAdd}
//                 currentLectures={currentLectures}
//             />
//             </td>
//         </tr>
//     );
// }

// // http://13.125.253.127:8080/kpu-schedule/lectureLoading/G
// Lecture.propTypes = {
//     lectureIdx: PropTypes.string.isRequired,
//     // lectureGubun: PropTypes.string.isRequired,
//     lectureName: PropTypes.string.isRequired,
//     // code: PropTypes.string.isRequired,
//     lectureYear: PropTypes.string.isRequired,
//     lectureSemester: PropTypes.string.isRequired,
//     // lectureDate: PropTypes.string.isRequired,
//     professorName: PropTypes.string.isRequired,
//     lectureCode: PropTypes.string.isRequired
// };

export default Lecture;