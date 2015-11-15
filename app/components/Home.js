import React from 'react';
import Timeline from './Timeline';
import Keypoints from './Keypoints';
import Vote from './Vote';
import Header from './Header';
import Sticky from './Sticky';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Sticky stickyClass="stickyvideo" topOffset={200} >
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe src="https://embed.la1tv.co.uk/livestream/7" frameBorder="0"></iframe>
                                </div>
                            </Sticky>
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
