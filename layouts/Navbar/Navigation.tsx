export const Navbar = () => {
    return (
        /* id in  <div className='collapse navbar-collapse' id='navbarNavDropDown'> must match that of button's data-bs-target */
        /* create bootstrap nav bar*/
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <span className='navbar-brand'> Ecommerce Shop </span>
                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
  
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'> <a className='nav-link' href='#'>Home</a> </li>
                        <li className='nav-item'> <a className='nav-link' href='#'>Products</a> </li>
                        <li className='nav-item'> <a className='nav-link' href='#'>test1</a> </li>
                        <li className='nav-item'> <a className='nav-link' href='#'>test2</a> </li>
                        <li className='nav-item'> <a className='nav-link' href='#'>Profile</a> </li>
                    </ul>

                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'> <a type='button' className='btn btn-outline-light' href='#'>Sign In</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}