import React, {useEffect} from 'react';
import './App.css';
import {connect, ConnectedProps} from "react-redux";
import {updateSystemInformationRequest} from './store/system/actions'
import { updateStationInformationRequest, updateStationStatusRequest} from './store/station/actions';
import StationList from "./components/StationList";
import {ApplicationState} from "./store";
import {StationState} from "./store/station/types";
import {LoadEnum} from "./store/loading/types";

const mapState = (state: ApplicationState) => ( {
    station: state.station,
    system: state.loading.system,
    information: state.loading.information,
    status: state.loading.status
});

const connector = connect(
    mapState,
    {
        updateSystemInformationRequest,
        updateStationInformationRequest,
        updateStationStatusRequest,
    })
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    station: StationState
}

const App = (props: Props) => {
  useEffect(()=> {
      if(props.system === LoadEnum.UNINITIALIZED) props.updateSystemInformationRequest();
      if(props.information === LoadEnum.UNINITIALIZED) props.updateStationInformationRequest();
      if(props.status === LoadEnum.UNINITIALIZED) props.updateStationStatusRequest();
  }, [props.station, props.system, props.information, props.status]);

  if(
      props.system !== LoadEnum.SUCCESS ||
      props.information !== LoadEnum.SUCCESS ||
      props.status !== LoadEnum.SUCCESS
  ){
      return <h1>Loading ...</h1>
  } else {
      return (
          <div className="App">
              <p>
                  <StationList station={props.station}/>
              </p>
          </div>
      );
  }
};

export default connector(App);
