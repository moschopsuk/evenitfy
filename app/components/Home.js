import React from 'react';
import Timeline from './Timeline';
import Keypoints from './Keypoints';
import Vote from './Vote';

class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <h1>Live Stream test page!</h1>
                <h3>Summary of the events!</h3>

                <ul className="list-inline tags">
                    <li><a href="#" className="name">test<span className="number">5</span></a></li>
                    <li><a href="#" className="name">test2<span className="number">43</span></a></li>
                    <li><a href="#" className="name">test3<span className="number">53</span></a></li>
                </ul>

                <div className="col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://embed.la1tv.co.uk/livestream/7" width="600" height="400" frameBorder="0"></iframe>
                    </div>
                    <Timeline />
                </div>

                <div className="col-md-4">
                    <Keypoints />
                    <Vote />
                </div>
            </div>
        );
    }
}

export default Home;
