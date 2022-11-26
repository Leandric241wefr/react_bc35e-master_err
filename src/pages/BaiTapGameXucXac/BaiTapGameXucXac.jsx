import React, { Component } from 'react'
import { connect } from 'react-redux'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'

class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div>
                Bai Tap Game Xuc Xac
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}

const mapStateProps = (state) => ({})

// const mapDispatchToProps = {}

export default connect(mapStateProps)(BaiTapGameXucXac)
