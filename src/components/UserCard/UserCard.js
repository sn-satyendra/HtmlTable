import React, {PureComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px;
  width: 300px;
  padding: 15px;
  white-space: nowrap;
`;

class UserCard extends PureComponent {
  render() {
    const {value, url} = this.props;
    return (
      <StyledCard>
        <a href={url} target="_blank">{value}</a>
      </StyledCard>
    );
  }
}

UserCard.propTypes = {
  value: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default UserCard;