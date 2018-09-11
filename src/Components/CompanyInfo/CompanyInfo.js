import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './CompanyInfo.css';

class CompanyInfo extends Component {
    render() {
        return (
            <div className="company-info-div">
                <div className="company-text-div">
                    <p style={{color: '#791f1d', fontSize: '16px'}}><strong>WHO WE ARE</strong></p>
                    <hr/>
                    <p style={{fontSize: '16px'}}><strong>Vision Net</strong> delivers innovative and reliable communications technology solutions that enable our customers to securely access, store, process and backup the information that is vital to their success.</p>
                    <hr/>
                </div>
                <div className="company-card-grid-div">
                    <Grid>
                        <Row>
                            <Col lg={6}>
                                <Image className="card-image" alt="servers" src="http://vision.net/images/page-title1.jpg"/>
                                <p><strong>Network</strong></p>
                                <p className="grey-description">Montana's Largest State-wide Network</p>
                            </Col>
                            <Col lg={6}>
                                <Image className="card-image" alt="server cage" src="http://vision.net/images/page-title5.jpg"/>
                                <p><strong>Enterprise Cloud Infrastructure</strong></p>
                                <p className="grey-description">Vision Net can protect, store, and transport your data.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Image className="card-image" alt="man at computers" src="http://vision.net/images/managed_services.jpg"/>
                                <p><strong>Business Services</strong></p>
                                <p className="grey-description">Vision Net can effectively monitor and manage your internet, fiber & IT infrastructure.</p>
                            </Col>
                            <Col lg={4}>
                                <Image className="card-image" alt="man at computers" src="http://vision.net/images/support_services.jpg"/>
                                <p><strong>Support Services</strong></p>
                                <p className="grey-description">Our support center delivers full range technical support services designed to enhance your productivity & image.</p>
                            </Col>
                            <Col lg={4}>
                                <Image className="card-image" alt="Vision Net logo" src="http://vision.net/images/generic2.jpg"/>
                                <p><strong>About Vision Net</strong></p>
                                <p className="grey-description">Read our Mission, Values and Company Culture Statement, as well as keep up on current news and announcements.</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default CompanyInfo;