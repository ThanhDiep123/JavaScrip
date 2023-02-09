import React, { Component } from 'react'

export class ShowDate1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ngay: 15,
            thang: 2,
            nam: 2022
        }
        alert('khoi tao')
    }
    componentDidMount() {
        alert('render xong = dismuont');
    }
    shouldComponentUpdate() {
        alert('xem xét update')
        return true;
    }
    componentDidUpdate() {
        alert('đã update')
    }
    capnhap = () => {
        this.setState({
            ngay: this.state.ngay + 1
        })
    }
    render() {
        return (
            <div>
                <p>Ngay: {this.state.ngay} Thang: {this.state.thang} Nam: {this.state.nam}</p>
                <button
                    onClick={this.capnhap} >
                    Cập nhập
                </button>
            </div>
        );
    }
}
export default ShowDate1