import React, { Component } from 'react';

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
        photoURL: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    }
  }
  render() {
    let btnImg = <img className='edit' src="https://www.svgrepo.com/show/46991/edit.svg"></img>
    const {name, title, location, email, profileInfo, website, photoURL} = this.state;
    return (
      <div className='profile'>
        {/* <h1>{this.props.title}</h1> */}
        <img src={photoURL} alt='UserPhoto' className='userImg'></img>
        <div className='name'>{name} <span>{this.props.show ? <button>{btnImg}</button> : null}</span></div>
        <div className='title'>{title}</div>
        <div className='location'>{location}</div>
        <div className='email'>{email}</div>
        <div className='website'>{website}</div>
        <div className='profileTitle'>PROFILE</div>
        <div className='profileInfo'>{profileInfo}</div>
      </div>
    );
  }
}

export default Profile;