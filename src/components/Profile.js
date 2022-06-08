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
        website: "zzzz.com"
    }
  }

  render() {
    const {name, title, location, email, profileInfo, website} = this.state;
    return (
      <div className='profile'>
        <h1>{this.props.title}</h1>
        <div className='name'>{name}</div>
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