import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import moment from 'moment'
import { css } from 'emotion'

import Library from './components/Library'
import Playlist from './components/Playlist'

import PlayButton from '../../../assets/icons/play-button.png'
import Calendar from '../../../assets/icons/calendar.png'
import './style.css'

const table = css({
    width: "85vw",
});

class List extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    columns = [
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
                const artist = [...artists.map(artist => artist.name).join(', ')]
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

    play = (track) => {
        const data = {
            isPlaying: true,
            song: {
                info: track,
                cover_url: track.album.images[track.album.images.length-1].url,
                artist: [...track.artists.map(artist => artist.name).join(', ')],
                name: track.name,
            }
        }
        const playSong = (data) => ({ type: 'PLAY_SONG', data })
        this.props.dispatch(playSong(data))
    }

    render(){
        return(
            <div className="list">
                {
                    this.props.state.type === 'playlist'
                    ? <Playlist />
                    : <Library />
                }
                <Table className={table} dataSource={this.props.state.tracks.map(song => song)} columns={this.columns} 
                size="small" bordered={false} rowClassName="row" {...this.props.state}
                pagination={{ defaultPageSize: 2000, hideOnSinglePage: true}}/>
            </div>
        )
    }
}

export default connect(state => ({ state }))(List)