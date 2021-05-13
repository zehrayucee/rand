import * as React from 'react';
import TextField from '@material-ui/core/TextField';
//import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@material-ui/core/Box';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@material-ui/lab/DesktopDateRangePicker';

export default function ResponsiveDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateRangePicker
        startText="Mobile start"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} variant="standard" />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} variant="standard" />
          </React.Fragment>
        )}
      />
      <DesktopDateRangePicker
        startText="Desktop start"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} variant="standard" />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} variant="standard" />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}

// import React, { Component } from 'react'
// //import DatetimeRangePicker from 'react-datetime-range-picker';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'react-dates/initialize';

// //import 'bootstrap-daterangepicker/daterangepicker.css';
// //import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
// import 'bootstrap/dist/css/bootstrap.css';
// //import 'onefe-bootstrap-daterangepicker/daterangepicker.css';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
// /*import {
//     Button,
//     label,
//     Card,
//     Pagination,
//     FormGroup,
//     Input,
//     PaginationItem,
//     PaginationLink,
//     Form,
//     Modal,
//     Container,
//     Row,
//     Col,
//   } from "reactstrap";*/
// class  Deneme extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             startdate:null,
//             enddate:null,
//         }
//     }
//     alertstartdate = () => {
//         alert(this.state.startdate)
        
//     }
//     alertenddate = () => {
//         alert(this.state.enddate)
        
//     }
    
    
//     render() {
//         return (
//           <>
//           <div className="app">
//           <DateRangePicker
//           startdate={this.state.startdate}
//           startdateıd="sdsd"
//           enddate={this.state.enddate}
//           enddateıd="hjjh"
//           onDatesChange={({startdate, enddate}) =>this.setState({startdate, enddate})   }
//           focusedInput={this.state.focusedInput}
//           onfocuschange={focusedInput=> this.setState({focusedInput})}
//           />
//           <br/>
//           <br/>
//           <button onClick={this.alertstartdate} >click-1</button>
//           <button onClick={this.alertenddate} >click-2</button>
//           </div>
//            </> 
//         );
//       }
    

// }
// export default Deneme;
