// components/Layout.js
import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { BiHomeAlt } from 'react-icons/bi';
import { MdOutlineSettings } from 'react-icons/md';
import './layout.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Dashboard</h1>
        <div className="user-info">
          <span>Welcome, Admin</span>
        </div>
      </header>
      <div className="main-content">
        <div className="sidebar">
          <ul>
            <li>
              <Link href="#">
                <BiHomeAlt className='icon'/>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <VscAccount className='icon'/>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <MdOutlineSettings className='icon'/>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="cards">{children}</div>
      </div>
    </>
  );
};

export default Layout;
