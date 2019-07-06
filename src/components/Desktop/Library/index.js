import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import moment from 'moment'

import './style.css'

const columns = [
    {
        title: '',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'TITLE',
        dataIndex: 'track.name',
        key: 'title',
    },
    {
        title: 'ARTIST',
        dataIndex: 'track.album',
        key: 'artist',
    },
    {
        title: 'DATE',
        dataIndex: 'added_at',
        key: 'added_at',
        render: date => <span>{moment(date).format("YYYY-MM-DD")}</span>
    },
];

const Library = ({ state, dispatch }) => (
    <>
        <h1 className="title">Songs</h1>
        <button className="play-button">PLAY</button>
        <Table dataSource={state.tracks.map(song => song)} columns={columns} />
        {console.log(state.tracks)}
    </>

)

export default connect(state => ({ state }))(Library)