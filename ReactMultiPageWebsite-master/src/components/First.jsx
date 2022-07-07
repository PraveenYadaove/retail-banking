import React from 'react';


function First() {
    return (
        <div className="home" style={{"margin-top":"25%",marginLeft:"25%"}}>
            <a href="/index"style={{"margin-right":"25%"}}><button className='btn btn-primary'>Admin</button></a>
            <a href="/about"><button className='btn btn-primary'>Customer</button></a>
        </div>
    )
}

export default First;