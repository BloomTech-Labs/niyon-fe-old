import { useState, useEffect } from 'react';
import { Button, Heading2, Skip } from '../~common/index';
import styled from 'styled-components';
import Steps from './StepsComp';
import Router from 'next/router';
import { connect } from 'react-redux';
import { socialDataHandler } from '../../redux/actions/authActions';
import { theme } from '../../lib/theme';

const SocialInfo = ({ socialDataHandler, username, loading, usernameId }) => {
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTweeter] = useState('');
  // const [gitHub, setGitHub] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      facebook: facebook || null,
      linkedin: linkedin || null,
      twitter: twitter || null
    };

    socialDataHandler(data, username).then(res => {
      if (res === 201) {
        Router.push('/');
      }
    });
  };
  return (
    <Root>
      <Steps stepNumber="5" />
      <Heading2 primary>Add your social media handles</Heading2>
      <FormArea onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="text"
            placeholder="Facebook handle"
            onChange={e => {
              setFacebook(e.target.value);
            }}
          />
          <i className="fab fa-facebook fa-lg"></i>
        </InputWrapper>
        <InputWrapper>
          <input
            type="text"
            placeholder="Linkedin handle"
            onChange={e => {
              setLinkedin(e.target.value);
            }}
          />
          <i className="fab fa-linkedin fa-lg"></i>
        </InputWrapper>
        <InputWrapper>
          <input
            type="text"
            placeholder="Twitter handle"
            onChange={e => {
              setTweeter(e.target.value);
            }}
          />
          <i className="fab fa-twitter fa-lg"></i>
        </InputWrapper>
        {/* <InputWrapper>
          <input
            type="text"
            placeholder="Github handle"
            onChange={e => {
              setGitHub(e.target.value);
            }}
          />
          <i className="fab fa-github fa-lg"></i>
        </InputWrapper> */}

        <Button small primary type="submit" loadingB={loading}>
          Next
        </Button>
        <Skip onHandle={() => Router.push('/')}></Skip>
      </FormArea>
    </Root>
  );
};

const mapStateToProps = state => {
  return {
    username: state.authReducer.emailData.username,
    loading: state.authReducer.loading,
    usernameId: state.authReducer.emailData.id
  };
};

export default connect(
  mapStateToProps,
  { socialDataHandler }
)(SocialInfo);

const Root = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h2 {
    text-align: center;
  }
`;

const FormArea = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 320px;

  @media (min-width: ${({ theme }) => theme.mobileWidth}) {
    width: 50%;
  }

  input {
    padding: 0.5rem;
    font-size: 16px;
    width: 70%;
    display: block;
    color: ${({ theme }) => theme.inputPurple};
    border: 1px solid rgba(77, 45, 82, 0.8);
    border-radius: 4px;
    ::placeholder {
      color: grey;
      opacity: 0.4;
    }
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  i {
    position: absolute;
    right: 20%;
    top: 30%;
    color: grey;
  }
`;
