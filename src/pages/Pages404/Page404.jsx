import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Pages404 extends Component {
    render() {
        return (
            < div className='container'>
                <h3 > Không tìm thấy nội dung</h3 >
                <h3>Bấm vào đây <NavLink className={"btn btn_success"} to="/">Tro ve trang chu</NavLink> </h3> </ div >
        )
    }
}