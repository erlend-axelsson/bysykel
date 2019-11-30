const express = require('express');
const path = require('path');
const axios = require('axios');

const CLIENT_IDENTIFIER = '-bysykkel';
const DISCOVERYURL = 'https://gbfs.urbansharing.com/oslobysykkel.no/gbfs.json';

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
    if(!response.data.nb) throw Error('no nb');
    if(!response.data.nb.feeds) throw Error('no feeds');
    if(!Array.isArray(response.data.nb.feeds)) throw Error('feeds is not an Array');

    const options = response.data.nb.feeds.reduce(
        (acc, cur) => (
            {...acc, [cur.name]: cur.url}),
        {
            ttl: response.ttl,
            last_updated: response.last_updated
        });

    if(!options.system_information) throw Error('feeds is missing system_information');
    if(!options.station_information) throw Error('feeds is missing station_information');
    if(!options.station_status) throw Error('feeds is missing station_status');

    return options;
};

const startServer = (options, clientIdentifier) => {
    const app = express();

    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    });

    app.get('/loading/system_information', async (req, res) => {
        const data = await getData(options.system_information, clientIdentifier);
        res.send(data);
    });
    app.get('/loading/station_information', async (req, res) => {
        const data = await getData(options.station_information, clientIdentifier);
        res.send(data);
    });
    app.get('/loading/station_status', async (req, res) => {
        const data = await getData(options.station_status, clientIdentifier);
        res.send(data);
    });

    app.listen(8080, ()=> console.log('starting server'));
};
main().then(console.log);