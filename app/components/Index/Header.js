import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <h1>Live Stream test page!</h1>
                        <h3>Summary of the events!</h3>
                        <i className="fa fa-clock-o"></i> 2nd September 2015 16:00
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
