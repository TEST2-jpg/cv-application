import React, { Component } from 'react';
import Skills from './Skills'

class Skillsforms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            profileBtn: false,

            input: {
                skill: ''
            },
            skills:
                [{
                    skill: 'Project Management'
                }
                    ,
                {
                    skill: 'Creativity'

                },
                {
                    skill: 'Leadership'
                }
                ]
        }
        this.showForm = this.showForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.showProfBtn = this.showProfBtn.bind(this);
        this.removeLast = this.removeLast.bind(this)


    }
    handleChange = (e) => {
        this.setState({
            input: {
                skill: e.target.value,
            },
        });
    };

    showForm() {
        this.setState({ showForm: !this.state.showForm })
    }
    showProfBtn() {
        this.setState({ profileBtn: !this.state.profileBtn })
        console.log(319)
    }
    handleSubmit(event) {
        this.showForm()
        event.preventDefault()
        this.setState({
            skills: this.state.skills.concat(this.state.input),
            input: {
                skill: ''
            }
        })
    }
    removeLast() {
        this.setState({
            skills: this.state.skills.slice(0, -1),
            input: {
                skill: ''
            }
        })
    }
    render() {
        const { skills } = this.state
        return (
            <div className='z'>
                <div>
                    {this.state.showForm && (
                        <div className='forms'>
                            <form className='profileForm' onSubmit={this.handleSubmit}>
                                <span className='xbtn'><button type='button' onClick={this.showForm}><img className='ximg' /></button></span>
                                <label htmlFor="skill">Skill</label>
                                <input type="text" name="skill" value={this.state.input.skill || ''} onChange={this.handleChange} placeholder="Enter skill" id="skill"></input>
                                <button className='submit'>Submit</button><span><button type='button' className='submit' onClick={this.removeLast}>Remove prev</button></span>
                            </form>
                        </div>
                    )}
                </div>
                <div onMouseEnter={this.showProfBtn} onMouseLeave={this.showProfBtn} className='relative'>
                    <Skills skills={skills} title='asadsa' btn={<span>{this.state.profileBtn ? <button className='btnskl' onClick={this.showForm}><img className='edit' src="https://www.svgrepo.com/show/46991/edit.svg" alt='edit profile'></img></button> : null}</span>
                    } />

                </div>
            </div>
        );
    }
}

export default Skillsforms;