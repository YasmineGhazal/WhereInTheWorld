import { useState } from "react";
import { Link } from 'react-router-dom';

const Light = () => (
  <>
    <img src="/light_mode.svg" className="mode-ico" alt="light_mode_icon" />
    <span>Light Mode</span>
  </>
);

const Dark = () => (
  <>
    <img src="/dark_mode.svg" className="mode-ico" alt="dark_mode_icon" />
    <span>Dark Mode</span>
  </>
);

const Navbar = () => {
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    document.querySelector('body').classList[lightMode ? 'add' : 'remove']('dark');
    setLightMode((lightMode) => !lightMode);
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/"><div className="title"> Where in the world?</div></Link>
        <div
          className="mode"
          onClick={toggleMode}
        >
          {lightMode ? <Dark /> : <Light />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
