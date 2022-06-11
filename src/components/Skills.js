import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className='profileTitle'>SKILLS{this.props.btn}</div>
                {/* <div>{this.props.skills[0].skill}</div> */}
                <div className='skill--container'>
                    {this.props.skills.map((skills, key) => {
                        return <div key={key}>
                            <div className='skilllist'>{skills.skill}</div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default Skills;