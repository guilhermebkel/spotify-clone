import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MdPlayCircleOutline, MdPauseCircleOutline, MdSkipNext, MdSkipPrevious } from "react-icons/md";

import '../style.css'

class Buttons extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    play = async () => {
        const playSong = () => ({ type: 'PLAY' })
        await this.props.dispatch(playSong())
        this.props.refreshState()
    }
    pause = async () => {
        const pauseSong = () => ({ type: 'PAUSE' })
        await this.props.dispatch(pauseSong())
        this.props.refreshState()
    }

    render(){
        return(
            <section className="buttons">
                <MdSkipPrevious className="next-previous" onClick={() => this.props.changeSong('previous')} />
                {
                    this.props.state.isPlaying 
                    ? <MdPauseCircleOutline className="play-pause" onClick={this.pause} /> 
                    : <MdPlayCircleOutline className="play-pause" onClick={this.play} />
                }
                <MdSkipNext className="next-previous" onClick={() => this.props.changeSong('next')} />
            </section>
        )
    }
}

export default connect(state => ({ state }))(Buttons)