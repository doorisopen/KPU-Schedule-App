import React , { Component } from 'react';
import { Scheduler, DayView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';


class TimeTableTemplate extends Component {

  render() {
    return (
      <Scheduler
      data={[
        { startDate: '2018-10-31 10:00', endDate: '2018-10-31 11:00', title: 'Meeting' },
        { startDate: '2018-11-01 18:00', endDate: '2018-11-01 19:30', title: 'Go to a gym' },
      ]}
    >
      <DayView />
      <Appointments />
    </Scheduler>
    );
  }
}
export default TimeTableTemplate;