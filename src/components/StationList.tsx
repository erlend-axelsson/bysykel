import React, {ChangeEvent, useState} from 'react';
import {connect} from "react-redux";
import {StationInformation, StationStatus} from "../store/station/types";
import {ApplicationState} from "../store";
import StationCard from "./StationCard";
import fuzzy from 'fuzzy'
import indexToValue from "../utils";

interface StationListProps {
    information?: StationInformation[];
    informationIndex?: {[key: string]: number}

    status?: StationStatus[];
    statusIndex?: {[key: string]: number}
}

const mapState = (state: ApplicationState) => ( {
    information: state.station.information,
    informationIndex: state.station.informationIndex,
    status: state.station.status,
    statusIndex: state.station.statusIndex
});

const StationList = (props: StationListProps) => {
    const [search, setSearch] = useState('');

    const results = fuzzy.filter(search, props.information || [], {extract(input: StationInformation): string {return  `${input.name} ${input.address}` }}).slice(0, 25);
    console.log(results);
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e || !e.target) return;
        setSearch(e.target.value || '');
    };

    if(results) {
        return <div>
            <p><input value={search} onChange={handleSearch}/></p>
            {results.map(result => <p><StationCard
                information={result.original}
                status={indexToValue(
                    props.status || [],
                    props.statusIndex || {},
                    result.original.station_id)
                }
            /></p>)}
        </div>
    } else {
        return null
    }
};

export default connect(mapState, undefined)(StationList);