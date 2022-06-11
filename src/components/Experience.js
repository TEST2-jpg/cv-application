import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className='exptitle'>WORK EXPERIENCE {this.props.btn}</div>
        <hr className='line--exp'></hr>
        {this.props.data.map((data, key) => {
          return <div key={key}>
            <div className='title--exp'>{data.title}</div>
            <div className='spaced'>
              <span className='comp--exp'>{data.company}</span>
              <span className='date--exp'>{data.date}</span>
            </div>
            <div className='tasks--exp'>{data.tasks}</div>

          </div>
        })}
      </div>
    );
  }
}

export default Experience;