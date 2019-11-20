import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserCard from '../UserCard/UserCard';

const StyledContainer = styled.div`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  align-items: center;
`;

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-right: 10px;
  }
`;

const StyledInput = styled.input`
  line-height: 1.4;
  padding: 4px;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 4px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-image: none;
  color: #000;
  background-color: #f5f5f5;
  border-color: #efefef;
  min-width: 45px;
  margin: 5px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class GithubUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: []
    };
  }

  onChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  onClick = () => {
    let {api} = this.props;
    api += this.state.username + '/repos';
    if (this.state.username) {
      fetch(api)
        .then(rawResp => {
          return rawResp.json();
        })
        .then(resp => {
          this.setState({
            repos: resp
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  render() {
    let {username, repos} = this.state;
    return (
      <StyledContainer>
        <StyledForm>
          <label>Github Username:</label>
          <StyledInput type="text" value={username} onChange={this.onChange} />
          <StyledButton onClick={this.onClick} disabled={!username}>Submit</StyledButton>
        </StyledForm>
        <CardsContainer>
          {
            repos.map(r => {
              return <UserCard value={r.name} key={r.id} url={r.html_url}/>;
            })
          }
        </CardsContainer>
      </StyledContainer>
    );
  }
}

GithubUsers.propTypes = {
  api: PropTypes.string.isRequired
};

GithubUsers.defaultProps = {
  api: 'https://api.github.com/users/'
}

export default GithubUsers;