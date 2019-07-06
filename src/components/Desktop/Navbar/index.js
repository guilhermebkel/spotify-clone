import React, { Component } from 'react'

import './style.css'

//import DownArrow from '../../../assets/icons/down-arrow.png'

export default class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <div style={{width: "85vw", backgroundColor: "transparent", height: "50px", position: "fixed",
            alignItems: "center", display: "flex", zIndex: 5
            }}>
                <img alt="avatar" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/062e7095-8aaf-4268-b8f6-5c5b65126a02/dcrmtkw-12aac034-3c91-4a94-b849-715578e6e3c4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2MmU3MDk1LThhYWYtNDI2OC1iOGY2LTVjNWI2NTEyNmEwMlwvZGNybXRrdy0xMmFhYzAzNC0zYzkxLTRhOTQtYjg0OS03MTU1NzhlNmUzYzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LogmOsZ4zDTXOVPjHAy5So_8zlb2PsWxNgSPiCqlzww"
                style={{width: "30px", margin: "auto 10px auto auto", borderRadius: "100%"}}
                />
                <h1 style={{color: "white", fontSize: "15px", marginRight: "20px"}}>Guilherme Mota Bromonschenkel Lima</h1>
            </div>
        )
    }
}