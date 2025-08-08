import React, { useState } from 'react';
import './Navbar1.css';
import order from '../../Assets/image/order.png'
import { Link } from 'react-router-dom';


const Navbar1 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false); 

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const handleLogout = (e) => {
    e.preventDefault();
    closeDrawer();
    setIsLoggingOut(true); // Show loading effect
    setTimeout(() => {
      window.location.href = '/'; // Reload and go to front page
    }, 5000);
  };
  return (
    <nav className="navbar-container">
      <header className="navbar">
        <div className="logo">
          SRISHIVA<br /><span>FASHION DESIGNER</span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links desktop">
          <Link to="/front1">View</Link>
          <Link to="/order1"><img src={order} alt='' className='or-icon'/></Link>
          <Link to="#" onClick={handleLogout}>Logout</Link>
        </div>

        {/* Mobile Icon */}
        <button className="menu-icon mobile" onClick={toggleDrawer}>☰</button>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="drawer">
          <button className="close-drawer" onClick={closeDrawer}>×</button>
          <Link to="/front1" onClick={closeDrawer}>View</Link>
          <Link to="/order1" onClick={closeDrawer}><img src={order} alt='' className='or-icon'/></Link>
          <Link to="#" onClick={handleLogout}>Logout</Link>
          <div className="mobile-contact">
          <span className="reservations">For any website creation</span>
          <a className="phone" href="tel:7010422586">📞 9361 0185 36</a>
    </div>
        </div>
      )}
     {isLoggingOut && (
        <div className="logout-loading">
          <div className="spinner"></div>
          <p>Logging out... Please wait</p>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar1;
