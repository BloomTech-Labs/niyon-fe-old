/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';
import {
  userProfileInfo,
  socialDataHandler
} from '../../redux/actions/authActions';
import { withRouter, useRouter } from 'next/router';
import EditLocation from './EditLocation';
import EditMentorship from './EditMentorhip';
import EditImage from './EditImage';
import EditSocialMedia from './EditSocialMedia';

import { Form, Input, message, Button } from 'antd';

const { TextArea } = Input;

// const dummyUser = {
//   image: 'https://milan.serverlessdays.io/speakers/guillermo-rauch.jpg',
//   name: 'Guillermo Rauch'
// };

const EditProfile = ({
  user,
  username,
  form,
  userProfileInfo,
  socialDataHandler
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [bio, setBio] = useState('');
  const [google, setGoogle] = useState('');
  const [github, setGithub] = useState('');
  const [facebook, setFacebook] = useState('');
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    fetchUser(router.query.user);
  }, []);

  useEffect(() => {
    if (user) {
      form.getFieldDecorator('First Name', { initialValue: user.first_name });
      setFirstName(user.first_name);
      form.getFieldDecorator('Last Name', { initialValue: user.last_name });
      setLastname(user.last_name);
      form.getFieldDecorator('Bio', { initialValue: user.biography });
      setBio(user.biography);
    }
  }, [user]);

  const success = () => {
    message.success('Your Profile was update succesfully');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const handleSave = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const data = {
          firstName,
          lastName,
          bio,
          locationId: user.location.locationId,
          jobId: '5' //not sure how to take job id from the user yet
        };

        userProfileInfo(data, user.username).then(res => {
          res === 200 ? success() : error();
        });
      }
    });
  };

  const { getFieldDecorator } = form;

  if (user) {
    return (
      <div>
        <Image>
          <EditImage user={user} />
        </Image>
        <div>
          <FirstSection>
            <Form onSubmit={handleSave}>
              <Form.Item label="First Name">
                {getFieldDecorator('First Name', {
                  rules: [
                    {
                      pattern: /^[a-zA-Z]*$/,
                      message: 'Must contain only letters'
                    },
                    {
                      required: true,
                      message: 'Please input your First Name!'
                    }
                  ]
                })(
                  <Input
                    value={user.first_name}
                    placeholder={user.first_name}
                    onChange={e => setFirstName(e.target.value)}
                  />
                )}
              </Form.Item>
              <Form.Item label="Last Name">
                {getFieldDecorator('Last Name', {
                  rules: [
                    {
                      pattern: /^[a-zA-Z]*$/,
                      message: 'Must contain only letters'
                    },
                    {
                      required: true,
                      message: 'Please input your Last Name!'
                    }
                  ]
                })(
                  <Input
                    value={user.first_name}
                    placeholder={user.last_name}
                    onChange={e => setLastname(e.target.value)}
                  />
                )}
              </Form.Item>
              <Form.Item label="Biography">
                {getFieldDecorator('Bio', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid!'
                    },
                    {
                      required: false,
                      message: 'Please input your Last Name!'
                    }
                  ]
                })(
                  <TextArea
                    rows={10}
                    value={user.bio}
                    placeholder={user.bio}
                    onChange={e => setBio(e.target.value)}
                  />
                )}
              </Form.Item>

              <Button
                type="primary"
                size="large"
                loading={false}
                htmlType="submit"
              >
                Update Information
              </Button>
              {/* <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!'
                  }
                ]
              })(<Input />)}
            </Form.Item> */}
            </Form>
          </FirstSection>

          {/* <div>
            <p>Username</p>
            <input type="text" name="username" value={user.username} />
          </div> */}
          <LocationSection>
            <h3>Enter new Location</h3>
            <EditLocation user={user} />
          </LocationSection>

          <div>
            <EditMentorship user={user} />
          </div>

          <SocialSection>
            <EditSocialMedia
              socialDataHandler={socialDataHandler}
              user={user}
            />
          </SocialSection>
        </div>
      </div>
    );
  }
  return <></>;
};

const mapDispatchToProps = {
  fetchUser,
  userProfileInfo,
  socialDataHandler
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const WrappedRegistrationForm = Form.create({ name: 'register' })(EditProfile);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WrappedRegistrationForm));

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  p {
    margin-left: 1rem;
  }
`;

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    width: 100%;
  }
`;

const LocationSection = styled.section`
  padding: 30px 0;
`;

const SocialSection = styled.section`
  button {
    width: 100%;
  }
`;
