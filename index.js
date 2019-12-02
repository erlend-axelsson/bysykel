const express = require('express');
const path = require('path');
const axios = require('axios');

const CLIENT_IDENTIFIER = '-bysykkel';
const DISCOVERYURL = 'https://gbfs.urbansharing.com/oslobysykkel.no/gbfs.json';

const SYSTEM_INFORMATION = 'system_information';
const STATION_INFORMATION = "station_information";
const STATION_STATUS = 'station_status';

const LANGUAGE = 'nb';
const FEEDS = 'feeds';


const main = async () => {
    const options = await init(DISCOVERYURL, CLIENT_IDENTIFIER);
    startServer(options, CLIENT_IDENTIFIER);
    return 'OK'
};

const init = async (url, clientIdentifier) => {
    const data = await getData(url, clientIdentifier);
    return mapDiscoveryResponse(data);
};

const getData = async (url, clientIdentifier) => {
    try {
        return (await axios.get(url, {headers: {'Client-Identifier': clientIdentifier}})).data;
    } catch (error) {
        throw(error);
    }
};

const mapDiscoveryResponse = (response) => {
    if(!response) throw Error('no response object');
    if(!response.last_updated) throw Error('no last_updated');
    if(!response.ttl) throw Error('no ttl');
    if(!response.data) throw Error('no data');

    if(!response.data[LANGUAGE]) throw Error('no nb');

    const feeds = response.data[LANGUAGE][FEEDS];
    if(!feeds) throw Error('no feeds');
    if(!Array.isArray(feeds)) throw Error('feeds is not an Array');

    const options = feeds.reduce(
        (acc, cur) => (
            {...acc, [cur.name]: cur.url}),
        {
            ttl: response.ttl,
            last_updated: response.last_updated
        });

    if(!options[SYSTEM_INFORMATION]) throw Error('feeds is missing system_information');
    if(!options[STATION_INFORMATION]) throw Error('feeds is missing station_information');
    if(!options[STATION_STATUS]) throw Error('feeds is missing station_status');

    return options;
};

const startServer = (options, clientIdentifier) => {
    const {get, listen, use} = express();

    use(express.static(path.join(__dirname, 'build')));

    get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    });

    get('/loading/system_information', async (req, res) => {
        const data = await getData(options[SYSTEM_INFORMATION], clientIdentifier);
        res.send(data);
    });
    get('/loading/station_information', async (req, res) => {
        const data = await getData(options[STATION_INFORMATION], clientIdentifier);
        res.send(data);
    });
    get('/loading/station_status', async (req, res) => {
        const data = await getData(options[STATION_STATUS], clientIdentifier);
        res.send(data);
    });

    listen(8080, ()=> console.log('starting server'));
};
main().then(console.log);