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

                        <ul className="list-inline tags">
                            <li><a href="#" className="name">test<span className="number">5</span></a></li>
                            <li><a href="#" className="name">test2<span className="number">43</span></a></li>
                            <li><a href="#" className="name">test3<span className="number">53</span></a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
