import React from 'react';
import Timeline from './Timeline';

class Home extends React.Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-7">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://embed.la1tv.co.uk/livestream/7" width="600" height="400" frameBorder="0"></iframe>
                </div>
                <Timeline />
            </div>
            <div className="col-md-5">
                <div className="well">
                    <h1>Class</h1>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
