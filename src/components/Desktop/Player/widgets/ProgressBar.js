import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../style.css'

class ProgressBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            songDuration: 0,
            currentTime: 0,
            currentTimeMilliseconds: 0,
            songState: 0,
        }
    }

    componentDidMount(){
        this.setState({ currentTime: this.millisToMinutesAndSeconds(this.state.currentTimeMilliseconds) })
    }

    componentWillReceiveProps(){
        this.setState({ songDuration: this.millisToMinutesAndSeconds(this.props.state.song.duration_ms) })

        if(this.state.songDuration !== this.millisToMinutesAndSeconds(this.props.state.song.duration_ms)){
            this.setState({ currentTime: this.millisToMinutesAndSeconds(0), songState: 0, currentTimeMilliseconds: 0 })
        }
        
        //if (this.props.state.isPlaying) this.play()
    }

    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    /*play(){
        const playing = setInterval(() => {
            this.setState({
                currentTime: this.millisToMinutesAndSeconds(this.state.currentTimeMilliseconds),
                currentTimeMilliseconds: this.state.currentTimeMilliseconds + 1000,
                songState: ((this.state.currentTimeMilliseconds + 1000) / this.props.state.song.duration_ms)*100,
            })
            if (!this.props.state.isPlaying) this.pause(playing)
        }, 1000)
    }

    pause(state){
        clearInterval(state)
    }*/

    render(){
        return(
            <section className="progress-bar-container">
                <span>{this.state.currentTime}</span>
                <div className="progress-bar">
                    <div style={{width: `${this.state.songState}%`}}></div>
                </div>
                <span>{this.state.songDuration}</span>
            </section>
        )
    }
}

export default connect(state => ({ state }))(ProgressBar)