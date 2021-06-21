import React from 'react';
function Header(props) {
    return (
        <div>
            {/* <h1>This is header</h1> */}
            <nav>
                <h1>React Meals</h1>
                <a style={{ color: 'white' }} href="">Order</a>
                <a style={{ color: 'white' }} href="">Home</a>
                <a style={{ color: 'white' }} href="">Contact Us</a>
            </nav>
        </div>
    );
}
export default Header;