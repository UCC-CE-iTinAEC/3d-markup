import React from 'react'
import './WidgetContainer.scss'

class WidgetContainer extends React.Component {

  constructor () {

    super()

  }


  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  componentDidMount () {


  }

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  componentWillUnmount () {

  }


  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  render() {

    return (
      <div className="widget-container">
        <div className="title">
          <label>
          {this.props.title}
          </label>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default WidgetContainer