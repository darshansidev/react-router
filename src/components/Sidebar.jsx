import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <Nav defaultActiveKey="/admin" className="flex-column">
            <Nav.Item>
                <Nav.Link href="/admin">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/admin/users">Users</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Sidebar;