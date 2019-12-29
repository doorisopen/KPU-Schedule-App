import React from 'react';
import axios from "axios";
import Lecture from "./Lecture";
import LectureAddTemplate from "./LectureAdd/LectureAddTemplate";
import LectureList from "./LectureAdd/LectureList";
import TimeTableTemplate from "./TimeTable/TimeTableTemplate";
import Major from "./Major";
import Pagination from "./Pagination";
import './App.css';
import './Controller.css';


class App extends React.Component {

  state = {
    url: "https://raw.githubusercontent.com/doorisopen/kpu-schedule-app/master/data/",
    gubun: "A.json",    // sch A, G
    currentMajor: "ALL",
    currentPage: 1,
    postsPerPage: 15,   // post per 15
    btn1Disabled: true,// button 1 enabled
    btn2Disabled: false, // button 2 disabled
    btn1Color: true,
    btn2Color: false, 
    isLoading: true, // 데이터 로딩
    majorLectureLoading: false, // 전공 데이터 로딩
    lectures: [],       // 전공 별 데이터 (변동)
    lecturesSave: [],   // 초기 전체 데이터 (고정)
    lectureItems: []    // 강의 추가 데이터 (변동)
  };

  // async: 이 함수가 비동기라는것을 말해주는것이고 await은 axios로 fetch 해온 data를 모두 로드 할때 까지 기다리라는 말임
  getLectures = async() => {
    const { url, gubun } = this.state;
    const settingData = [];
    const {
      data : { 
        lectures 
      }
    /* AWS Server */ 
    // http://13.125.253.127:8080/kpu-schedule/
    //"https://raw.githubusercontent.com/doorisopen/kpu-schedule-app/master/data/A.json"
    } = await axios.get( url + gubun );

    // 배열 요소(selected: false) 추가 한다.
    lectures.forEach(lecture => {
      settingData.push({...lecture, selected: false});
    });

    // state-> lectures:lectures <- axios에서 가져온 lectures임
    this.setState({ lectures: settingData, lecturesSave: settingData, isLoading: false });
  };

  getMajorLectures = async() => {
    const majorLectures = [];
    const { currentMajor, lectures } = this.state;
    
    lectures.forEach(lecture => {
      if(lecture.lectureCode.includes(currentMajor)) {
          majorLectures.push(lecture);
      }
    });
    
    this.setState({ lectures: majorLectures, isLoading: false, majorLectureLoading: false});

  };

  // componentDidMount: component가 생성되고 호출되는 life Cycle
  componentDidMount() {
    this.getLectures();
  }
  
  // componentDidUpdate: setState가 되면 호출되는 life Cycle 제어문이 없으면 무한 루프돌 위험이있음
  componentDidUpdate() {
    if(this.state.isLoading && !this.state.majorLectureLoading) {
      this.getLectures();
    }
    if(this.state.isLoading && this.state.majorLectureLoading) {
      this.getMajorLectures();
    }
  }

  // Controller 대학, 대학원 disable, enable event
  onChangeButton1(event) {
    if (event.target.onclick) {
      this.setState({ btn2Disabled: false, btn2Color: false});
      this.setState({ btn1Disabled: true, btn1Color: true}); 
    }
  }
  onChangeButton2(event) {
    if (event.target.onclick) {
      this.setState({ btn1Disabled: false, btn1Color: false});
      this.setState({ btn2Disabled: true, btn2Color: true});
    }
  }
  

  render() {
    // Get state
    const { 
      currentPage, 
      postsPerPage, 
      isLoading, 
      lectures, 
      lecturesSave, 
      currentMajor, 
      lectureItems
    } = this.state;

    // Get current lectures
    const indexOfLastLecture = currentPage * postsPerPage;
    const indexOfFirstLecture = indexOfLastLecture - postsPerPage;
    const currentLectures = lectures.slice(indexOfFirstLecture, indexOfLastLecture);

    // Change Page
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
    // Chage btn Color
    const btn1Selected = this.state.btn1Color ? "red" : "black";
    const btn2Selected = this.state.btn2Color ? "red" : "black";
    
    // Change Major
    const changeMajor = (majorCode) => {
      this.setState({ lectures: lecturesSave, currentMajor: majorCode, currentPage: 1, isLoading: true, majorLectureLoading: true});
      console.log("change Major -->"+currentMajor);
    }

    // Lecture Add
    const lectureAdd = (lectureAddItems) => {
      this.setState({
        // lectures: unSelectedLectures,
        lectureItems: lectureItems.concat(lectureAddItems)
      });
    }

    // lecture Remove
    const lectureRemove = (lectureIdx) => {
      const { lectureItems } = this.state;
      this.setState({ 
        lectureItems: lectureItems.filter(lectureItem => lectureItem.Item.lectureIdx !== lectureIdx)
      });
    }
    

    return (
      <div className="lecture-page">
        <header className="lecture-page-header">
          한국산업기술대학교 강의 시간표 만들기
        </header>
          <section className="lecture-container">
            {isLoading ? (
              <div className="loader">
                Loading...
              </div>
              ) : (
                <div className="lecture-contents">
                  {/* {s} Controller */}
                  <div className="lecture-controller">
                    <div className="controller-item">
                      <Major 
                        lectures={lectures}
                        changeMajor={changeMajor}
                      />
                    </div>
                    <div className="controller-item">
                      <button className="controller-button" onClick={(event) => {
                          this.setState({ lectures: [], currentPage: 1, gubun: "A.json", isLoading: true});
                          this.onChangeButton1(event);
                        }}
                        style={{color: btn1Selected}}
                        disabled={this.state.btn1Disabled}
                      >
                          학부(대학교)
                      </button>
                      <button className="controller-button" onClick={(event) => {
                          this.setState({ lectures: [], currentPage: 1, gubun: "G.json", isLoading: true});
                          this.onChangeButton2(event);
                        }}
                        style={{color: btn2Selected}}
                        disabled={this.state.btn2Disabled}
                      >
                        석사(대학원)
                      </button>
                    </div>
                  </div>
                  {/* {e} Controller */}
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
                      {currentLectures.map(lecture => (
                        <Lecture
                          key={lecture.lectureIdx}
                          lectureIdx={lecture.lectureIdx}
                          lectureGubun={lecture.lectureGubun} 
                          lectureName={lecture.lectureName} 
                          code={lecture.code} 
                          lectureYear={lecture.lectureYear} 
                          lectureSemester={lecture.lectureSemester}
                          lectureDate={lecture.lectureDate}
                          professorName={lecture.professorName}
                          lectureCode={lecture.lectureCode}
                          selected={lecture.selected}
                          lectureAdd={lectureAdd}
                          currentLectures={currentLectures}
                        />
                      ))}
                    </tbody>
                  </table>
                  <Pagination 
                    currentPage={currentPage}
                    postsPerPage={postsPerPage} 
                    totalPosts={lectures.length} 
                    paginate={paginate} />
                </div>
            )}
              <div className="lecture-contents">
                <LectureAddTemplate>
                  <LectureList
                    key = {lectureItems}
                    lectureItems = {lectureItems}
                    lectureRemove = {lectureRemove}
                    currentLectures={currentLectures}
                  />
                </LectureAddTemplate>
                <div>
                  <button>
                    시간표 만들기
                  </button>
                </div>
              </div>
              <div className="timeTable-container">
                <TimeTableTemplate>

                </TimeTableTemplate>
              </div>
          </section>
        <footer className="lecture-page-footer">
          github. https://github.com/doorisopen
        </footer>
      </div>
    );
  }

}
export default App;
