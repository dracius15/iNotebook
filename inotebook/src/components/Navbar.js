import { useEffect } from 'react'
import React from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
  let navigate=useNavigate()
    let location = useLocation();
    useEffect(() => {
        console.log([location.pathname])
      }, [location]);
      const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login');
      }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">iNotebook</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        </ul>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> 
           <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
  </li>*/}
      
      {!localStorage.getItem('token')?<form class="d-flex" role="search">
      <Link class="btn btn-primary mx-2" role="button" to="/login">Login</Link>
        <Link class="btn btn-primary mx-2" role="button" to="/signup">Sign Up</Link>
      </form>:<button onClick={handleLogout} className='btn btn-primary'>Sign out</button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
