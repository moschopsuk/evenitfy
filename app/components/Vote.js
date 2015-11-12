import React from 'react';

class VoteResult extends React.Component {
    render() {
      return (
        <div>
            <h5>Result</h5>
            <div className="progress">
                <div className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: this.props.percent + '%'}}
                    >
                    {this.props.percent}%
                </div>
            </div>
        </div>
      )
  }
};

class Vote extends React.Component {
  render() {
    return (
        <div className="well">
            <h2>Vote</h2>
            <p>Is this a much better live coverage page or what?</p>
            <VoteResult percent="30" />
            <VoteResult percent="60" />
            <VoteResult percent="80" />
        </div>
    );
  }
}

export default Vote;
