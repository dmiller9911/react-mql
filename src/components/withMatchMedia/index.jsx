import React, { Component } from 'react';
import * as queryUtil from '../../common/queryUtil';

export default function withMatchMediaHoc(...mediaQueries) {
  return (WrappedComponent) => {
    class MatchMedia extends Component {
      constructor(props) {
        super(props);
        this.state = {
          matchesMedia: {}
        };

        this.handleMatchMedia = this.handleMatchMedia.bind(this);
      }

      componentWillMount() {
        queryUtil.addListeners(this.handleMatchMedia, ...mediaQueries);
        this.setState({
          matchesMedia: queryUtil.getMatchMediaValues(...mediaQueries)
        });
      }

      componentWillUnmount() {
        queryUtil.removeListeners(this.handleMatchMedia, ...mediaQueries);
      }

      handleMatchMedia(mediaQueryList) {
        this.setState({
          matchesMedia: Object.assign({}, this.state.matchesMedia, {
            [mediaQueryList.media]: mediaQueryList.matches
          })
        });
      }

      render() {
        return (
          <WrappedComponent
            {...this.props}
            matchesMedia={this.state.matchesMedia}
          />
        );
      }
    }

    return MatchMedia;
  };
}
