import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {
    debugger;
    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const toogleCollapse =() => {
        
        setIsCollapsed(!isCollapsed);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">
                    <img src='https://lh3.googleusercontent.com/MNU-TdTmSxpeO0PuVLWqoduWhQpl-HQPCbuzIooQDCmSze5mIehgArBfVoeYMl0ctLw8lMc5rmIaysYWBonafRgAV7mp_Z3ayPf6ecw2INFWOXG6akc5ypQF0b1DD7s3lBY_czJTwJPpqZDvxC5qkrypguCLqqvsi6TVaUkdKfqanddTFvOHEH6qcjT7D8i-JFVS1VeC1ixL6u5Z39rU37LJFjlLe0Dg8yw4Y0Kv1jCTYTq0NS_Co-nWNti1O2igxey5HEmixB3ZAQdtrspvwTMlk6S3G1_FxgC8ULbq6tGWxhZOtodisiBzsL6W4i9gsmJRzIvq8J6BUaCHAcMjyWFckelMqF4LD437sM2bRh7cLryMh9UimqVI8Zk3WgFcbS_237ncpxYUum8aXoMVHMlHH0rJZugExEGmjJydwqwdIhuFt2goxENhDBZ3M0Ofsr3ZMzLNIQUmGgPO2P8ZZxUQmMMqgtrwd_sBN04CfGnfO2ZiATUxtDERO8j8bk3wN-LVZB07ZZYVl7xJ1w3Z5TMnknby_0KcZR1XZ8OzBRKKztpypQa-Jz0BI_38B1J3ywaa3GK7krnD-gz55kiLLvUcpiQuqaETlEufhS3vt2fCa-8gZHIrDIoto1x9U1uVHSt1HJX42a8_kFTuvTkgNJvIWudugbtpCyYHo9kdzkJdrM09jOZvppeN7EsB1ZQ=w469-h455-no?authuser=0' alt='Profile photo'/>
                    <h1>My First React App</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isCollapsed ? true : false} aria-label="Toggle navigation" onClick={toogleCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item " onClick={()=>setIsCollapsed(!isCollapsed)}>
                        
                        <Link to='/' className="navbar-brand">Birthday Notification</Link>
                    </li>
                    <li className="nav-item" onClick={()=>setIsCollapsed(!isCollapsed)}>
                        <Link to='/tour' className="navbar-brand">Tours</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default NavBar;