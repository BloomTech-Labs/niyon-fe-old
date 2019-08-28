import styled from 'styled-components';
import { Text, Button } from '../~common/index';
import Link from 'next/link';
import Router from 'next/router';

const SignUp = () => {
  return (
    <Root>
      <Text small>Lorem Ipsum, welcome message, blah blah blah.`</Text>
      <ButtonArea>
        <Button large primary>
          Google
        </Button>
        <Button large secondary>
          Github
        </Button>
        <Button large danger>
          Twitter
        </Button>
        <Button large warning>
          Facebook
        </Button>
        <Button large outline primary>
          <Link href="/auth/email">Email</Link>
        </Button>
      </ButtonArea>
      <Text small>
        Already a member? <Link href="/auth/login">Login IN</Link>{' '}
      </Text>
    </Root>
  );
};

export default SignUp;

const Root = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    margin: 50px 0;
  }
  a {
    text-decoration: none;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 320px;
`;
