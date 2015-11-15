import React from 'react';

class TimelineItem extends React.Component {
    render() {
        return (
            <li>
                <div className="timeline-badge warning"><i className="fa fa-bullhorn"></i></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                    </div>
                    <div className="timeline-body">
                        <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                    </div>
                </div>
            </li>
        )
    }
};

class Timeline extends React.Component {
    render() {
        return (
            <ul className="timeline">
                <TimelineItem />
                <TimelineItem />
                <TimelineItem />
                <TimelineItem />
                <TimelineItem />
                <TimelineItem />
            </ul>
        )
    }
};


export default Timeline;
