'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

import { Theme } from '../../../theme';
import { ClerkProvider, RedirectToSignIn, SignedIn, UserButton, useUser } from '@clerk/nextjs';
import { useTheme } from '@/app/theme-provider';


const Nav: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useUser();
  const userEmail=user.user?.primaryEmailAddress?.emailAddress;

 

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Task Manager</h1>
      <div className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/complete">Completed Task</Link>
        <Link href="/schedule">Schedule</Link>
        {
          user? (
            <div className={styles.auth}>
              <UserButton/>
              <p>{userEmail}</p>
            </div>
          ) : (
            <RedirectToSignIn />
          )
        }
        <div className={styles.themeSelector}>
        <select
          value={theme}
          onChange={(e) => handleThemeChange(e.target.value as Theme)}
        >
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
          <option value="blue">Blue Theme</option>
        </select>
      </div>
      </div>
     
      
      <div className={styles.menu}>
        <button onClick={handleMenuToggle} className={styles.menuToggle}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
