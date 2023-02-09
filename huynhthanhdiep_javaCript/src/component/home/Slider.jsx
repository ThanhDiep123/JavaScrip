import React, { Component } from 'react'
import axios from 'axios'
import Appurl from '../api/Appurl'
export class Slider extends Component {
    constructor() {
        super();
        this.state = {
            sliders: []
        }
    }
    componentDidMount() {
        axios.get(Appurl.allSliders)
            .then((response) => {
                this.setState({
                    sliders: response.data,
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }
    render() {

        let sliders = this.state.sliders;
        var myview = sliders.map((slider, j) => {
            return (
                <div className={(j == 0) ? " active item" : "item"}>
                    <img src={slider.slider_img} className="girl img-responsive" alt="" />
                </div>

            )
        })

        return (
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#slider-carousel" data-slide-to="0" className=""></li>
                                    <li data-target="#slider-carousel" data-slide-to="1" className="active"></li>
                                    <li data-target="#slider-carousel" data-slide-to="2" className=""></li>
                                </ol>
                                <div className="carousel-inner">
                                    {myview}
                                </div>
                                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev"><i className="fa fa-angle-left"></i></a><a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Slider