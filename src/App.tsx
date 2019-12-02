import React, {useEffect} from 'react';
import './App.css';
import {connect, ConnectedProps} from "react-redux";
import {updateSystemInformationRequest} from './store/system/actions'
import { updateStationInformationRequest, updateStationStatusRequest} from './store/station/actions';
import StationList from "./components/StationList";
import {ApplicationState} from "./store";
import {StationState} from "./store/station/types";
import {LoadEnum} from "./store/loading/types";

interface DispatchProps {
    updateSystemInformationRequest: () => void
    updateStationInformationRequest: () => void
    updateStationStatusRequest: () => void
}

const mapState = (state: ApplicationState) => ( {
    station: state.station,
    system: state.loading.system,
    information: state.loading.information,
    status: state.loading.status
});

const mapDispatchToProps: DispatchProps = {
    updateSystemInformationRequest,
    updateStationInformationRequest,
    updateStationStatusRequest
};

const connector = connect(
    mapState,
    mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    station: StationState
}

const App = (
    {
        station,
        system,
        information,
        status,
        updateStationInformationRequest,
        updateStationStatusRequest,
        updateSystemInformationRequest
    }: Props) => {
  useEffect(()=> {
      if(system === LoadEnum.UNINITIALIZED) updateSystemInformationRequest();
      if(information === LoadEnum.UNINITIALIZED) updateStationInformationRequest();
      if(status === LoadEnum.UNINITIALIZED) updateStationStatusRequest();
  }, [station, system, information, status, updateSystemInformationRequest, updateStationInformationRequest, updateStationStatusRequest]);

  if(
      system !== LoadEnum.SUCCESS ||
      information !== LoadEnum.SUCCESS ||
      status !== LoadEnum.SUCCESS
  ){
      return <h1>Loading ...</h1>
  } else {
      return (
          <div className="App">
              <p>
                  <StationList station={station}/>
              </p>
          </div>
      );
  }
};

export default connector(App);
