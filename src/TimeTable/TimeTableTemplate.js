import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import '../App.css';

export default class TimeTableTemplate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mainResourceName: 'location',
      resources: [
        {
          fieldName: 'location',
          title: '강의실',
          instances: [
            { id: 'Room 1', text: "강의실"},
            { id: 'Room 2', text: "강의실"},
            { id: 'Room 3', text: "강의실"},
            { id: 'Room 4', text: "강의실"},
            { id: 'Room 5', text: "강의실"},
            { id: 'Room 6', text: "강의실"},
            { id: 'Room 7', text: "강의실"},
            { id: 'Room 8', text: "강의실"},
            { id: 'Room 9', text: "강의실"},
            { id: 'Room 10', text: "강의실"}
          ],
        },
        { // 교수이름
          fieldName: 'members',
          title: '교수명',
          allowMultiple: false,
          instances: [
            { id: 1, text: '교수명' }
          ],
        },
      ],
    };

    this.changeMainResource = this.changeMainResource.bind(this);
  }

  changeMainResource(mainResourceName) {
    this.setState({ mainResourceName });
  }

  render() {
    const { data, resources, mainResourceName } = this.state;
    const {
      lectureItems,
      isMakeTable
    } = this.props;
    const dayNum = {
      "월": {id: 3},
      "화": {id: 4},
      "수": {id: 5},
      "목": {id: 6},
      "금": {id: 7},
    }
    if(isMakeTable) {
      const appointment = [];
      let dateLen, startTime1, endTime1, startTime2, endTime2;
      let __day, __startHour, __endHour, __startMin, __endMin; 

      for(let i = 0; i < lectureItems.length; i++) {
        dateLen = lectureItems[i].Item.lectureDate.length;

        if(dateLen < 40) {
          __day = lectureItems[i].Item.lectureDate[0];
          startTime1 = lectureItems[i].Item.lectureDate.split(']')[1].split('~')[0].trim();
          __startHour = startTime1.split(":")[0];
          __startMin = startTime1.split(":")[1];
          endTime1 = lectureItems[i].Item.lectureDate.split(']')[1].split('~')[1].trim();
          __endHour = endTime1.split(":")[0];
          __endMin = endTime1.split(":")[1];
        }

        if(dateLen > 40) {
          __day = lectureItems[i].Item.lectureDate[0];
          startTime1 = lectureItems[i].Item.lectureDate.split(']')[1].split('~')[0].trim();
          __startHour = startTime1.split(":")[0];
          __startMin = startTime1.split(":")[1];
          endTime1 = lectureItems[i].Item.lectureDate.split(']')[1].split('~')[1].substring(0,5).trim();
          __endHour = endTime1.split(":")[0];
          __endMin = endTime1.split(":")[1];
          

          startTime2 = lectureItems[i].Item.lectureDate.split(']')[2].split('~')[0].trim();
          __startHour = startTime2.split(":")[0];
          __startMin = startTime2.split(":")[1];
          endTime2 = lectureItems[i].Item.lectureDate.split(']')[2].split('~')[1].trim();
          __endHour = endTime2.split(":")[0];
          __endMin = endTime2.split(":")[1];

          // console.log(dateLen+": 1->"+startTime1+" "+endTime1);
          // console.log(dateLen+": 2->"+startTime2+" "+endTime2);
        }
        appointment.push(
          {
            title: lectureItems[i].Item.lectureName,
            startDate: new Date(2020, 1, dayNum[__day].id, __startHour, __startMin),
            endDate: new Date(2020, 1, dayNum[__day].id, __endHour, __endMin),
            id: 1,
            members: 1,
            location: 'Room '+(i+1)
          }
        );
        // resources[0].instances[i].text = lectureItems[i].Item.lectureLocation;
        // resources[1].instances[i].text = lectureItems[i].Item.professorName;
      }
      if(data.length === 0) {
        this.setState({ data: appointment });
        console.log(resources);
      }
    }
                     
    return (
      <div className="timeTable-contents">
        
        {/* <ResourceSwitcher
          resources={resources}
          mainResourceName={mainResourceName}
          onChange={this.changeMainResource}
        /> */}

        <Paper>
          <Scheduler
            data={data}
            height={600}
            >
            <ViewState
              defaultCurrentDate="2020-02-08"
            />
            <WeekView
              excludedDays={[0,6]}
              startDayHour={8}
              endDayHour={23.5}
            >
            </WeekView>
            
            <Appointments />
            <AppointmentTooltip />
            <Resources
              data={resources}
              mainResourceName={mainResourceName}
            />
          </Scheduler>
        </Paper>
      </div>
    );
  }
}