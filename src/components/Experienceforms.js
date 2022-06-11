import React, { Component } from 'react';
import Experience from './Experience';

class Experienceforms extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log(this.state.jobs)

  }
  showForm() {
    this.setState({ showForm: !this.state.showForm })
    console.log(this.state.showForm, 'monkey')
  }

  render() {
    const { jobs } = this.state
    return (
      <div className='exp'>
        <div>
          {this.state.showForm && (
            <div className='forms'>
              <form className='profileForm' onSubmit={this.handleSubmit}>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" value={this.state.input.company || ''} onChange={this.handleCompany} placeholder="Enter company" id="company"></input>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={this.state.input.title || ''} onChange={this.handleTitle} placeholder="Enter job title" id="title"></input>
                <label htmlFor="date">Date</label>
                <input type="text" name="date" value={this.state.input.date || ''} onChange={this.handleDate} placeholder="Enter job date duration" id="date"></input>
                <label htmlFor="email">Tasks</label>
                <input type="text" name="tasks" value={this.state.input.tasks || ''} onChange={this.handleTasks} placeholder="Enter job description" id="tasks"></input>
                <button className='submit'>Submit</button>
              </form>
            </div>
          )}
        </div>
        <span>{this.props.show ? <button className='expBtn' onClick={this.showForm}>EIJFIOWEF</button> : null}</span>
        <Experience data={jobs} />
      </div>
    );
  }
}

export default Experienceforms;