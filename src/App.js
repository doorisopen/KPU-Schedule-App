import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    lectures: [],
    lectureList: []
  }

   // async: 이 함수가 비동기라는것을 말해주는것이고 await은 axios로 fetch 해온 data를 모두 로드 할때 까지 기다리라는 말임
   getLectures = async() => {
    const { 
      data : { 
        lectureList 
      }
    } = await axios.get(
      "http://13.125.253.127:8080/kpu-schedule/lectureLoading"
    );
    console.log(lectureList);
    // state-> movies:movies <- axios에서 가져온 moives임
    this.setState({ lectureList, isLoading: false });
  };

  // componentDidMount: component가 생성되고 호출되는 life Cycle
  componentDidMount() {
    this.getLectures();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }

}

export default App;
