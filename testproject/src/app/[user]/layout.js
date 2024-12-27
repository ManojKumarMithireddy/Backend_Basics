// components/Layout.js
'use client';
import React, { Suspense, useEffect } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { BiHomeAlt } from 'react-icons/bi';
import { MdOutlineSettings } from 'react-icons/md';
import './layout.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import Loading from '@/app/loading';

const Layout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    // if user is not logged in, redirect to login page
    if (!user.userName) {
      alert('Please login to continue');
      router.push('/');
    }
  }, [user.userName]);

  const handleLogout = () => {
    // clear the local storage and redirect to login page
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  };
  return (
    <>
      <header>
        <h1>Dashboard</h1>
        <div className="user-info">
          <span>
            <Link href="/" className="logout" onClick={handleLogout}>
              Logout
            </Link>
          </span>
        </div>
      </header>
      <div className="main-content">
        <div className="sidebar">
          <ul>
            <li>
              <Link
                href={`/${user.userName}`}
                className={pathname === `/${user.userName}` ? 'active' : ''}>
                <BiHomeAlt className="icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <VscAccount className="icon" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <MdOutlineSettings className="icon" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loading />}>
          <div className="cards">{children}</div>
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
