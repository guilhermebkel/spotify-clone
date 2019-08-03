import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../style.css'

class ProgressBar extends Component{

    render(){
        return(
            <section className="progress-bar-container">
                <span>{this.props.currentTime}</span>
                <div className="progress-bar">
                    <div style={{width: `${this.props.songState}%`}}></div>
                </div>
                <span>{this.props.songDuration}</span>
            </section>
        )
    }
}

export default connect(state => ({ state }))(ProgressBar)