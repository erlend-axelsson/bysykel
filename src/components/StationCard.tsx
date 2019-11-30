import React from 'react';
import {Station, StationInformation, StationStatus} from "../store/station/types";
import './StationCard.css';

type StationProps = {
    station: Station
}

const information = (information?: StationInformation) => {
    if(!information) return null
    return <>
        <dt>Name</dt>
        <dd>{information.name}</dd>
        <dt>address</dt>
        <dd>{information.address}</dd>
        <dt>capacity</dt>
        <dd>{information.capacity}</dd>
    </>
};

const status = (status?: StationStatus) => {
    if(!status) return null
    return <>
        <dt>bikes available</dt>
        <dd>{status.num_bikes_available}</dd>
        <dt>docks available</dt>
        <dd>{status.num_docks_available}</dd>
        <dt>last reported </dt>
        <dd>{new Date(status.last_reported).toLocaleTimeString()}</dd>
    </>
};

const StationCard = ({station}: StationProps) => {
    return <div className='StationCard'>
        <dl>
            {information(station.information)}
            {status(station.status)}
        </dl>
    </div>

};

export default StationCard;
