import React, { Component } from 'react'
import axios from 'axios'
import 'placeholder-loading/dist/css/placeholder-loading.css'
import Appurl from '../api/Appurl'
export class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.slug,
            siteInfo: [],//ham rong
            content: '',// chuoi rong
            displayContent: 'none',
            displayLoading: 'block'
        }
    }
    loadSiteInfo() {
        axios.get(Appurl.allSiteInfo)
            .then((response) => {
                this.setState({
                    siteInfo: response.data[0],
                    content: response.data[0][this.props.slug],
                    displayContent: 'block',
                    displayLoading: 'none'
                });
            })

            .catch((error) => {
                console.log(error)
            })

    }
    shouldComponentUpdate(props) {
        if (this.state.slug != props.slug) {
            this.setState({
                slug: props.slug,
                title: props.title,
                content: this.state.siteInfo[props.slug]
            })
            return true;
        }

        else return false;
    }

    componentDidMount() {
        this.loadSiteInfo();
    }
    render() {
        return (
            <div className="content">
                <div className="infopanel" style={{ display: this.state.displayContent }}>
                    <h2>{this.state.title}</h2>
                    <div className='content' dangerouslySetInnerHTML={{ __html: this.state.content }} />

                </div>
                <div class="ph-item" style={{ display: this.state.displayLoading }}>
                    <div class="ph-col-12">
                    <div class="ph-col-12 big"></div>
                        <div class="ph-row">
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-8"></div>
                            <div class="ph-col-8"></div>
                            <div class="ph-col-9"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-10"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info