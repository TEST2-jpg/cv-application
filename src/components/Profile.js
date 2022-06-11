import React, { Component } from 'react';
import Skillsforms from './Skillsforms';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cia Rodriguez",
      title: "Graphic Designer",
      location: "123 Anywhere St. XXX City 1233",
      email: "hello@gmail.com",
      profileInfo: "Assists the department head in carrying out digital marketing companies works closely with the marketing head for digital production",
      website: "zzzz.com",
      photoURL: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      showForm: false,
      submitt: false,
      profileBtn: false,
    }
    this.showForm = this.showForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showProfBtn = this.showProfBtn.bind(this);


  }
  showProfBtn() {
    this.setState({ profileBtn: !this.state.profileBtn })
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({ submitt: !this.state.submitt })
  }
  showForm() {
    this.setState({ showForm: !this.state.showForm })

  }
  render() {
    let btnImg = <img className='edit' src="https://www.svgrepo.com/show/46991/edit.svg" alt='edit profile'></img>
    const { name, title, location, email, profileInfo, website, photoURL, profileBtn } = this.state;
    const xButton = profileBtn ? <button className='profileBtn' onClick={this.showForm}>{btnImg}</button> : null
    return (
      <div className='profile'>
        <div>
          {(this.state.showForm) && (
            <div className='forms'>
              <form className='profileForm' onSubmit={this.handleSubmit}>
                <span className='xbtn'><button type='button' onClick={this.showForm}><img className='ximg'/></button></span>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Enter your full name" id="name"></input>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Enter your job title" id="title"></input>
                <label htmlFor="address">Address</label>
                <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="Enter your address" id="address"></input>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={this.handleChange} placeholder="Enter your email" id="email"></input>
                <label htmlFor="profInfo">Linkedin</label>
                <input type="text" name="website" value={website} onChange={this.handleChange} placeholder="Enter your Linkedin proile" id="linkedin"></input>
                <label htmlFor="linkedin">Profile Info</label>
                <input type="text" name="profileInfo" value={profileInfo} onChange={this.handleChange} placeholder="Profile info" id="profInfo"></input>
                <button className='submit'>Submit</button>
              </form>
            </div>
          )}
        </div>
        {/* <h1>{this.props.title}</h1> */}
        <div onMouseEnter={this.showProfBtn} onMouseLeave={this.showProfBtn}>
          <img src={photoURL} alt='UserPhoto' className='userImg'></img>
          <div className='name'>{name}<span>{xButton}</span></div>
          <div className='title'>{title}</div>
          <div className='location'>{location}</div>
          <div className='email'>{email}</div>
          <div className='website'>{website}</div>
          <div className='profileTitle'>PROFILE</div>
          <div className='profileInfo'>{profileInfo}</div>
        </div>
        <Skillsforms />

      </div>
    );
  }
}

export default Profile;