import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, Image, NavItem } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
    
    render() {
        return (
            <div>
                <Navbar className="top-nav-bar" collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                        {/* width={600} height={358} */}
                            <Image alt="logo" src="http://www.lewisandclarkfoundation.org/_logos/71_1527824124.jpg" responsive/>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem>
                                <p style={{color: '#4fa064'}}><strong>Home</strong></p>
                            </NavItem>
                            <NavDropdown eventKey={1} title="Network" id="basic-nav-dropdown">
                                <MenuItem eventKey={1.1}>Network Map</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.2}>Transport Services</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.3}>Enterprise Wireless</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.4}>Internet</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.5}>SD-WAN</MenuItem>
                            </NavDropdown>
                            <NavItem>
                                <p>Enterprise Cloud Infrastructure</p>
                            </NavItem>
                            <NavDropdown eventKey={3} title="Business Services" id="basic-nav-dropdown2">
                                <MenuItem eventKey={3.1}>Network Management</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.2}>Security Services</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Disaster Recovery</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.4}>Hosted Voice & Unified Communicators Suite</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={4} title="Support Services" id="basic-nav-dropdown3">
                                <MenuItem eventKey={4.1}>Network Operations Center</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={4.2}>Technical Assistance Center</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={4.3}>Remote Device Management</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={5} title="About Us" id="basic-nav-dropdown4">
                                <MenuItem eventKey={5.1}>Newsroom</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={5.2}>Contact Us</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
            </div>
        );
    }
}

export default NavBar;