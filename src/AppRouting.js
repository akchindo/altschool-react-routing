import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function Home() {
  // Using the useSearchParams hook to get the search params
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      id: 123456,
    });

    // setSearchParams({
    //   name: "Abdul",
    // });

    console.log(searchParams.get("id"));
  }, [searchParams, setSearchParams]);

  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/about");
  };

  return (
    <section className='main-page'>
      <p>Home </p>
      <p>This is the home page.</p>
      <p>Click the link to go to the about page.</p>
      <Link to='/about'>About</Link>
      <Navigation />
      <div>
        <button className="navigate" onClick={handleNavigate}>Go to the about page</button>
      </div>
    </section>
  );
}

function About() {
  // useLocation
  const location = useLocation();
  console.log(location);

  return (
    <section className='main-page'>
      <p>About </p>
      <p>This is the about page.</p>
      <p>Click the link to go to the home page.</p>
      <Link to='/'>Home</Link>
      <Navigation />
    </section>
  );
}

function Navigation() {
  return (
    <section className='main-page'>
      <nav className='navigation'>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "black" }
          }
          className='navigate'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "black" }
          }
          className='navigate'
          to='/about'
        >
          About
        </NavLink>
      </nav>
    </section>
  );
}

const AppRouting = () => {
  return (
    <section className='main-page'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </section>
  );
};

export default AppRouting;
