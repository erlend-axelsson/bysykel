import React, {ChangeEvent, useState} from 'react';
import {Station, StationState} from "../store/station/types";
import StationCard from "./StationCard";
import fuzzy from 'fuzzy'

interface StationListProps {
    station: StationState,
}

const sortByAvailableBikes = (firstEl: Station, secondEl: Station) => {
    return secondEl.status.num_bikes_available - firstEl.status.num_bikes_available
};

const StationList = ({station}: StationListProps) => {
    const [search, setSearch] = useState('');

    const stationArray = Object.values(station).sort(sortByAvailableBikes);
    const results = fuzzy.filter(
        search,
        stationArray,
        {extract(input: Station): string {return  `${input.information.name} ${input.information.address}` }}
        ).slice(0, 25);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e || !e.target) return;
        setSearch(e.target.value || '');
    };
    return <>
        <h1>Søk</h1>
        <p>Hvis søkefeltet står tomt vises de 25 stasjonene med flest ledige sykler</p>
        <div><input value={search} onChange={handleSearch}/></div>
        {results?
            results.map(result => <StationCard key={result.original.information.station_id} station={result.original}/>)
            : null
        }
    </>
};

export default StationList;