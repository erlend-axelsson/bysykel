import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

type mapProps = {
    lat: number,
    lon: number,
    zoom: number,
    name: string
}

const StationMap = ({lat, lon, zoom, name}: mapProps) => {


    return <Map
        center={[lat, lon]}
        zoom={zoom}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
    >
        <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[lat, lon]}>
            <Popup>
                {name}
            </Popup>
        </Marker>
    </Map>
};

export default StationMap;