import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Slider } from 'antd'

import '../style.css'

class ProgressBar extends Component{

    render(){
        return(
            <section className="progress-bar-container">
                <span>{this.props.currentTime}</span>
                <Slider 
                    value={this.props.songState}
                    step={0.1}
                    tooltipVisible={false}
                />
                <span>{this.props.songDuration}</span>
            </section>
        )
    }
}

export default connect(state => ({ state }))(ProgressBar)