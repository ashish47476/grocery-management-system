import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import '../../src/Sidebar.css'

const Sidebar = (props) => {
    return (
      <Menu>
        <a className="menu-item" href="/LoginCustomer">
        Customer
        </a>
        <a className="menu-item" href="/vendorlogin">
        Vendor
        </a>
        <a className="menu-item" href="/adminlogin">
        Admin
        </a>
        
      </Menu>
    );
  };
  
  export default Sidebar;
