import React, {useEffect} from 'react';
import './App.css';
import {getStationInformation, getStationStatus, getSystemInformation} from "./api/api";
import {connect, ConnectedProps} from "react-redux";
import { updateSystemInformation } from './store/system/actions'
import { updateStationInformationArray, updateStationStatusArray, deleteStationArray} from './store/station/actions';
import StationList from "./components/StationList";


const connector = connect(
   undefined,
    {
        updateSystemInformation,
        updateStationInformationArray,
        updateStationStatusArray,
        deleteStationArray
    })
type PropsFromRedux = ConnectedProps<typeof connector>

const App = (props: PropsFromRedux) => {
  useEffect(()=> {
    getSystemInformation(props.updateSystemInformation);
    getStationInformation(props.updateStationInformationArray);
    getStationStatus(props.updateStationStatusArray);
  })
  return (
    <div className="App">
        <p>
            <StationList/>
        </p>
    </div>
  );
};

export default connector(App);
