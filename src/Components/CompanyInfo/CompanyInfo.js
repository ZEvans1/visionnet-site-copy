import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
                                <p>Network</p>
                            </Col>
                            <Col lg={6}>
                                <p>Enterprise Cloud Infrastructure</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <p>Business Services</p>
                            </Col>
                            <Col lg={4}>
                                <p>Support Services</p>
                            </Col>
                            <Col lg={4}>
                                <p>About Vision Net</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default CompanyInfo;