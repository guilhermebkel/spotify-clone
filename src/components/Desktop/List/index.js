import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import moment from 'moment'
import { css } from 'emotion'

import Library from './components/Library'
import Playlist from './components/Playlist'

import PlayButton from '../../../assets/icons/play-button.png'
import Calendar from '../../../assets/icons/calendar.png'
import './style.css'

const columns = [
    {
        title: '',
        dataIndex: 'track',
        key: 'play',
        render: track => <img alt="play" src={PlayButton} className="play-music" onClick={() => this.play(track)}></img>,
        className: "column",
    },
    {
        title: () => <span className="columnTitle">TITLE</span>,
        dataIndex: 'track.name',
        key: 'title',
        render: title => <span className="columnData">{title}</span>,
        className: "column"
    },
    {
        title: () => <span className="columnTitle">ARTIST</span>,
        dataIndex: 'track.artists',
        key: 'artist',
        render: artists => {
            const artist = [...artists.map(artist => artist.name + ' ')]
            return (<span className="columnData">{artist}</span>)
        },
        className: "column",
    },
    {
        title: () => <img alt="calendar" src={Calendar} className="calendar"></img>,
        dataIndex: 'added_at',
        key: 'added_at',
        render: date => <span className="columnData">{moment(date).format("YYYY-MM-DD")}</span>,
        className: "column"
    },
];

const table = css({
    width: "85vw",
});

const List = ({ state, dispatch }) => (
    <div className="list">
        {
            state.type === 'playlist'
            ? <Playlist />
            : <Library />
        }
        <Table className={table} dataSource={state.tracks.map(song => song)} columns={columns} 
        size="small" bordered={false} rowClassName="row" 
        pagination={{ defaultPageSize: 2000, hideOnSinglePage: true}}/>
    </div>
)

export default connect(state => ({ state }))(List)