import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  Heading2,
  Heading3,
  Heading4,
  Text,
  Avatar,
  TeamCard,
} from '../components/~common/index';

const exampleAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqXXZ9bvEdMLqeIostuHOdpP4KSwTry_pDOyMTfQCDUKCXiMw';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-bottom: 50px;
`;

const Menu = styled.div`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 250px;
  background: #fff;
  min-height: 100vh;
  padding: 40px 20px;
  border-right: 1px solid #ddd;

  div {
    box-sizing: border-box;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  a {
    color: #484848;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
`;

const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100vh;
  padding: 20px;
  margin-left: 20%;
`;

const Section = styled.div`
  box-sizing: border-box;
  border-bottom: #ddd 1px solid;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

function Components() {
  return (
    <Wrapper>
      <Menu>
        <div>
          <Heading3>Components</Heading3>
        </div>
        <div>
          <a href="#headings">Headings</a>
        </div>
        <div>
          <a href="#text">Text</a>
        </div>
        <div>
          <a href="#avatar">Avatar</a>
        </div>
        <div>
          <a href="#buttons">Buttons</a>
        </div>
        <div>
          <a href="#cards">Cards</a>
        </div>
        <div>
          <a href="#inputs">Inputs</a>
        </div>
      </Menu>
      <Column>
        <Section id="headings">
          <Heading4>Headings</Heading4>
          <Heading>Heading 1</Heading>
          <Heading2>Heading 2</Heading2>
          <Heading3>Heading 3</Heading3>
          <Heading4>Heading 4</Heading4>
        </Section>

        <Section id="text">
          <Heading4>Text</Heading4>

          <Text large>
            Large Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras auctor nulla non eros varius suscipit. Suspendisse ullamcorper
            urna a ipsum tincidunt accumsan. Fusce ac dui velit.
          </Text>

          <Text medium>
            Medium Text or also the p tag. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras auctor nulla non eros varius
            suscipit. Suspendisse ullamcorper urna a ipsum tincidunt accumsan.
            Fusce ac dui velit.
          </Text>

          <Text small>
            Small Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras auctor nulla non eros varius suscipit. Suspendisse ullamcorper
            urna a ipsum tincidunt accumsan. Fusce ac dui velit.
          </Text>
        </Section>

        <Section id="avatar">
          <Heading4>Avatars</Heading4>
          <Row>
            <Card>
              <Avatar extraLarge source={exampleAvatar} />
              <p>Extra Large</p>
            </Card>
            <Card>
              <Avatar large source={exampleAvatar} />
              <p>Large</p>
            </Card>
            <Card>
              <Avatar medium source={exampleAvatar} />
              <p>Medium</p>
            </Card>
            <Card>
              <Avatar small source={exampleAvatar} />
              <p>Small</p>
            </Card>
          </Row>
        </Section>

        <Section id="buttons">
          {/* <p>Button</p>
          <Button>Hello</Button>
          <p>Button Raised</p>
          <Button raised>Hello</Button>
          <p>Button Outline</p>
          <Button outline>Hello</Button>
          <p>Button Secondary</p>
          <Button variant="secondary">Hello</Button>
          <p>Button Raised Secondary</p>
          <Button raised variant="secondary">
            Hello
          </Button>
          <p>Button Outline Secondary</p>
          <Button outline variant="secondary">
            Hello
          </Button> */}
        </Section>

        <Section id="cards">
          <Heading4>Cards</Heading4>
          <p>Team Card</p>
          <TeamCard
            source={exampleAvatar}
            name="Jane Doe"
            title="Web Developer"
            githubURL="https://github.com/"
            linkedinURL="https://www.linkedin.com/"
            twitterURL="https://twitter.com/"
          />
        </Section>

        <Section id="inputs">
          {/* <p>Input</p>
          <Input placeholder="Text here..." />
          <p>Input Error</p>
          <Input
            placeholder="Password here..."
            type="password"
            value="1234"
            readOnly
            error
            errorMsg="Password must be longer than 4 characters"
          /> */}
        </Section>
      </Column>
    </Wrapper>
  );
}

export default Components;
