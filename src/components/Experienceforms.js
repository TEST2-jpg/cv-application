import React, { Component } from 'react';
import Experience from './Experience';

class Experienceforms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expHidden: false,
      input: {
        company: '',
        title: '',
        date: '',
        tasks: ''
      },
      jobs:
        [{
          title: "PROJECT MANAGER",
          company: "Really Great company",
          date: "Oct 2022 - Present",
          tasks: "Comes up with unique graphic design for clients. Work closely with the copywriting team"
        },
        {
          title: "PROJECT MANAGER",
          company: "Great company",
          date: "Jan 2018 - July 2019",
          tasks: "Edited editorial photos for clients and magaines. ORganization of files"
        }, {
          title: "ART DIRECTOR",
          company: "weewwe company",
          date: "Dec - 2021",
          tasks: "dited editorial photos for clients and magaines. ORganization of fildited editorial photos for clients and magaines. ORganization of fil"
        }]
    }
    this.showForm = this.showForm.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleTasks = this.handleTasks.bind(this);
    this.expShowBtn = this.expShowBtn.bind(this);
    this.removeLast = this.removeLast.bind(this);

  }
  expShowBtn() {
    this.setState({ expHidden: !this.state.expHidden })
  }
  handleTitle(event) {
    this.setState({
      input:
      {
        ...this.state.input,
        title: event.target.value
      }
    })
  }
  handleCompany(event) {
    this.setState({
      input: {
        ...this.state.input,
        company: event.target.value
      }
    })
  }
  handleDate(event) {
    this.setState({
      input: {
        ...this.state.input,
        date: event.target.value
      }
    })
  }
  handleTasks(event) {
    this.setState({
      input: {
        ...this.state.input,
        tasks: event.target.value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      jobs: this.state.jobs.concat(this.state.input),
      input: {
        company: '',
        title: '',
        date: '',
        tasks: ''
      }
    })
  }

  showForm() {
    this.setState({ showForm: !this.state.showForm })
  }

  removeLast() {
    this.setState({
      jobs: this.state.jobs.slice(0,-1),
      input: {
        company: '',
        title: '',
        date: '',
        tasks: ''
      }
    })
  }

  render() {
    const { jobs } = this.state
    return (
      <div className='exp'>
        <div>
          {this.state.showForm && (
            <div className='forms'>
              <form className='profileForm' onSubmit={this.handleSubmit}>
                <span className='xbtn'><button type='button' onClick={this.showForm}><img className='ximg' /></button></span>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" value={this.state.input.company || ''} onChange={this.handleCompany} placeholder="Enter company" id="company"></input>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={this.state.input.title || ''} onChange={this.handleTitle} placeholder="Enter job title" id="title"></input>
                <label htmlFor="date">Date</label>
                <input type="text" name="date" value={this.state.input.date || ''} onChange={this.handleDate} placeholder="Enter job date duration" id="date"></input>
                <label htmlFor="email">Tasks</label>
                <input type="text" name="tasks" value={this.state.input.tasks || ''} onChange={this.handleTasks} placeholder="Enter job description" id="tasks"></input>
                <button className='submit'>Submit</button> <span><button type='button' className='submit' onClick={this.removeLast}>Remove prev</button></span>
              </form>
            </div>
          )}
        </div>
        <div onMouseEnter={this.expShowBtn} onMouseLeave={this.expShowBtn} >
          <Experience data={jobs} btn={<span>{this.state.expHidden ? <button className='btnskl' onClick={this.showForm}><img className='edit' src="https://www.svgrepo.com/show/46991/edit.svg" alt='edit profile'></img></button> : null}</span>}></Experience>
        </div>
      </div>
    );
  }
}

export default Experienceforms;