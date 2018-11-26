import React, { Component } from 'react';
// import './Header.css'

class Header extends Component {

     render() {
    return (

<div className="navbar-container">
<div className="logo">
<h1 className="title">HighOnCoding</h1>
</div>
<div className="navbar">
<ul className="nav nav-pills mb-3 nav-list" id="pills-tab" role="tablist">
<li className="nav-item">
  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
</li>
<li className="nav-item">
  <a className="nav-link" id="pills-profile-tab" data-toggle="Categories" href="categories.html" role="tab" aria-controls="pills-profile" aria-selected="false"> Categories</a>
</li>
</ul>
<div className="tab-content" id="pills-tabContent">
<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
</div>
</div>
       )
    }
}

export default Header
