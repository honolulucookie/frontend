export const Services = () => {
    return(
        <div className='container my-5'>
            <div className='row p-4 align-items-center border shadow-lg'>
                <div className='col-lg-7 p-3'>
                    <h1 className='display-4 fw-bold'>
                        Need Help?
                    </h1>
                    <p className='lead'>
                        If you cannot find what you are looking for, 
                        send our admin a personal message!
                    </p> 
                    <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                        {/*} 
                        {authState?.isAuthenticated ? 
                        <Link to='/messages' type='button' className='btn main-color btn-lg px-4 me-md-2 fw-bold text-white'>
                            Library Services
                        </Link>   
                        :
                        <Link className='btn main-color btn-lg text-white' to='/login'>
                            Sign up
                        </Link> 
                    } */}
                        <a className='btn main-color btn-lg text-white' href='#'>Sign Up</a>

                    </div>
                </div>
                <div className='col-lg-4 offset-lg-1 shadow-lg lost-image'></div>
            </div>
        </div>
    );
}