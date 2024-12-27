'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import Link from 'next/link';
import './page.css';
import { usePathname, useRouter } from 'next/navigation';

export default function Welcome({ children }) {
  const user = useUserStore((state) => state.user);
  const pathname = usePathname();
  const router = useRouter();


  const navLinks = [
    { href: `/${user.userName}`, label: 'Dashboard' },
    { href: `/${user.userName}/profile`, label: 'Profile' },
    { href: `/${user.userName}/appointments`, label: 'Appointments' },
    
   
  ];
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
      {/* Header with logo, name in first row and navigation options in second row */}
      <div className="header">
        <div className="head-logo">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
            <p>Hospiatal Management System</p>
          </div>
          <div className="logout">
            {/* logout */}
            <Link href="/" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </div>
        <div className="nav">
          {navLinks.map(({ href, label }) => (
            <Link
              href={href}
              className={pathname === href ? 'navActive' : 'navLink'}
              key={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div>Welcome {user.userName}</div>
      <main>{children}</main>
    </>
  );
}
