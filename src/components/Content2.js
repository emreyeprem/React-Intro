
import React, { Component } from 'react';


class Content2 extends Component {

    render() {
      return (

        <div className="container">
          <div className="column">
            <div className="col-sm">
              <h3 className="watchkit">{this.props.title}</h3>
              <p className="paragraph">
              {this.props.paragraph}

              </p>
            </div>
            <div className="col-sm likes">
            {this.props.likes}

          </div>
          </div>
          </div>


      )
    }
}

export default Content2
