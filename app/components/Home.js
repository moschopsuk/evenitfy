import React from 'react';
import Timeline from './Timeline';
import Keypoints from './Keypoints';
import Vote from './Vote';
import Header from './Header';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <div className="row">
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
                </div>
            </div>
        );
    }
}

export default Home;
