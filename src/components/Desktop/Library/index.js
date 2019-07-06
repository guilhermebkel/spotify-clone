import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import moment from 'moment'

import PlayButton from '../../../assets/icons/play-button.png'
import Calendar from '../../../assets/icons/calendar.png'
import './style.css'

const columns = [
    {
        title: '',
        dataIndex: 'track',
        key: 'play',
        render: track => <img alt="play" src={PlayButton} className="play-music" onClick={() => this.play(track)}></img>
    },
    {
        title: () => <span className="columnTitle">TITLE</span>,
        dataIndex: 'track.name',
        key: 'title',
        isSortColumn: true,
        render: title => <span className="columnData">{title}</span>,
        className: "table"
    },
    {
        title: () => <span className="columnTitle">ARTIST</span>,
        dataIndex: 'track.artists',
        key: 'artist',
        render: artists => {
            const artist = [...artists.map(artist => artist.name)]
            return (<span className="columnData">{artist}</span>)
        }
    },
    {
        title: () => <img alt="calendar" src={Calendar} className="calendar"></img>,
        dataIndex: 'added_at',
        key: 'added_at',
        render: date => <span className="columnData">{moment(date).format("YYYY-MM-DD")}</span>
    },
];

const Library = ({ state, dispatch }) => (
    <div className="library">
        <h1 className="title">Songs</h1>
        <button className="play-button">PLAY</button>
        <Table dataSource={state.tracks.map(song => song)} columns={columns} 
        className="table" size="small" bordered={false}/>
    </div>
)

export default connect(state => ({ state }))(Library)