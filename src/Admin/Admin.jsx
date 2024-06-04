import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Admin = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/admin">Dashboard</Nav.Link>
                        <Nav.Link href="/admin/users">Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Admin;