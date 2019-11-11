import React, {PureComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
	border-radius: 8px;
	color: #fff;
	background: green;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

export default class Button extends PureComponent {
  static propTypes = {
    /**
		 * Children of the button.
		 */
    children: PropTypes.any,

    /**
		 * Theme to be used for the button.
		 */
    theme: PropTypes.oneOf(['light', 'dark'])
  };

  static defaultProps = {
    theme: 'light'
  };

  render() {
    return <ButtonWrapper {...this.props}>{this.props.children}</ButtonWrapper>;
  }
}
