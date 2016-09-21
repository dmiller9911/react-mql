import React, { Component, PropTypes } from 'react';
import * as queryUtil from '../../common/queryUtil';

const propTypes = {
  media: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired
};

class MatchMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchesMedia: {}
    };

    this.handleMatchMedia = this.handleMatchMedia.bind(this);
  }

  componentWillMount() {
    queryUtil.addListeners(this.handleMatchMedia, ...this.props.media);
    this.setState({
      matchesMedia: queryUtil.getMatchMediaValues(...this.props.media)
    });
  }

  componentWillUnmount() {
    queryUtil.removeListeners(this.handleMatchMedia, ...this.props.media);
  }

  handleMatchMedia(mediaQueryList) {
    this.setState({
      matchesMedia: Object.assign({}, this.state.matchesMedia, {
        [mediaQueryList.media]: mediaQueryList.matches
      })
    });
  }

  render() {
    return React.Children.only(this.props.children)(this.state.matchesMedia);
  }
}

MatchMedia.propTypes = propTypes;

export default MatchMedia;
