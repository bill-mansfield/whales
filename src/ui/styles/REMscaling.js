import React from 'react'

class REMScaling extends React.Component {
  constructor(props) {
    super(props)
    this.windowGlobal = typeof window !== 'undefined' && window
    this.state = {
      width: this.windowGlobal.innerWidth,
      fontSize: this.getDynamicFontSize(),
    }
    this.handleResize = this.handleResize.bind(this)
  }

  getDynamicFontSize() {
    const lowestBreakpoint = 992
    const highestBreakpoint = 1440
    const lowestFontSize = 13.0357
    const highestFontSize = 16
    const currentWidth = this.windowGlobal.innerWidth
    if (lowestBreakpoint <= currentWidth && highestBreakpoint >= currentWidth) {
      const fontDifference = highestFontSize - lowestFontSize
      const scaleFactor =
        (currentWidth - lowestBreakpoint) /
        (highestBreakpoint - lowestBreakpoint)
      return lowestFontSize + fontDifference * scaleFactor
    }
    if (currentWidth > highestBreakpoint) {
      return highestFontSize
    }
    return null
  }

  componentDidMount() {
    this.windowGlobal.addEventListener('resize', this.handleResize)
    if (this.state.fontSize !== null) {
      document.documentElement.style.fontSize = `${this.state.fontSize}px`
    } else {
      document.documentElement.style.removeProperty('font-size')
    }
  }

  componentWillUnmount() {
    this.windowGlobal.removeEventListener('resize', this.handleResize)
    document.documentElement.style.removeProperty('font-size')
  }

  componentDidUpdate() {
    if (this.state.fontSize !== null) {
      document.documentElement.style.fontSize = `${this.state.fontSize}px`
    } else {
      document.documentElement.style.removeProperty('font-size')
    }
  }

  handleResize() {
    this.setState({
      width: this.windowGlobal.innerWidth,
      fontSize: this.getDynamicFontSize(),
    })
  }

  render() {
    const { children } = this.props
    return children
  }
}

export default REMScaling
