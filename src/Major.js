import React from "react";


const Major = ({ lectures, changeMajor }) => {
    const majors = [
        {
            majorName: "전공을 선택하세요",
            majorCode: "",
        },
        {
            majorName: "전체",
            majorCode: "",
        },
        {
            majorName: "컴퓨터공학부",
            majorCode: "ACS",
        },{
            majorName: "기계공학과",
            majorCode: "AME",
        },{
            majorName: "기계설계공학과",
            majorCode: "AMD",
        },{
            majorName: "메카트로닉스공학과",
            majorCode: "AAE",
        },{
            majorName: "전자공학부",
            majorCode: "AEE",
        },{
            majorName: "게임공학부",
            majorCode: "AMM",
        },{
            majorName: "신소재공학과",
            majorCode: "AMT",
        },{
            majorName: "생명화학공학과",
            majorCode: "ACH",
        },{
            majorName: "디자인학부",
            majorCode: "AID",
        },{
            majorName: "경영학부",
            majorCode: "AEB",
        },{
            majorName: "나노광공학과",
            majorCode: "ANO",
        },{
            majorName: "에너지전기공학과",
            majorCode: "AEN",
        },{
            majorName: "교양기초교육원",
            majorCode: "AAK", /// AAJ(현장)
        }
    ];

    // const majorLectures = [];
    // lectures.map(lecture => {
    //     if(lecture.lectureCode.includes("AAK")) {
    //         majorLectures.push(lecture);
    //     }
    // });
    // console.log(majorLectures);

    return (
        <select onChange={(event) => {
                changeMajor(event.target.value);
            }}>
            {majors.map(major => (
                <option key={major.majorName} value={major.majorCode}>
                    {major.majorName}
                </option>
            ))}
        </select>
    );
};

// Major.propTypes = {
//     temp: PropTypes.number.isRequired,
//     condition: PropTypes.oneOf([
//         "컴퓨터공학부",
//         "기계공학과", 
//         "기계설계공학과",
//         "메카트로닉스공학과",
//         "전자공학부",
//         "게임공학부",
//         "신소재공학과",
//         "생명화학공학과",
//         "디자인학부",
//         "경영학부",
//         "나노광공학과",
//         "에너지전기공학과",
//         "교양기초교육원"
//     ]).isRequired
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//       },
//       temp: {
//         fontSize: 42,
//         color: "white"
//       },
//       halfContainer: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       },
//       title: {
//         color: "white",
//         fontSize: 44,
//         fontWeight: "300",
//         marginBottom: 10,
//         textAlign: "left"
//       },
//       subtitle: {
//         fontWeight: "600",
//         color: "white",
//         fontSize: 24,
//         textAlign: "left"
//       },
//       textContainer: {
//         alignItems: "flex-start",
//         paddingHorizontal: 40,
//         justifyContent: "center",
//         flex: 1
//       }
// });

export default Major