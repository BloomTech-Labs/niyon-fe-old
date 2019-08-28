import Link from 'next/link';
import styled from 'styled-components';
import { Avatar, Heading4 } from '../~common/index';
import { Icon } from 'antd';

const dummyUser = {
  image: 'https://milan.serverlessdays.io/speakers/guillermo-rauch.jpg',
  name: 'Guillermo Rauch'
};

const Navigation = () => {
  return (
    <Nav>
      <div className="desktop">
        <Avatar extraLarge source={dummyUser.image}></Avatar>
        <p className="desktop name">{dummyUser.name}</p>
      </div>

      <div className="mobile-avatar">
        {/* <Icon medium className="fas fa-times mobile-icon"></Icon> */}
        <Avatar small source={dummyUser.image}></Avatar>
      </div>
      <Links>
        <Link href="/home">
          <div>
            {/* <Icon medium className="fas fa-home icon"></Icon> */}
            <Icon type="home" className="icon" />
            <a className="desktop">Home</a>
          </div>
        </Link>
        <Link href="/[username]">
          <div>
            {/* <Icon medium className="fas fa-user-circle icon"></Icon> */}
            <Icon type="user" className="icon" />
            <a className="desktop">Profile</a>
          </div>
        </Link>
        <Link href="/">
          <div>
            {/* <Icon medium className="fas fa-users icon"></Icon> */}
            <Icon type="share-alt" className="icon" />
            <a className="desktop">Connections</a>
          </div>
        </Link>
        <Link href="/explore">
          <div>
            {/* <Icon medium className="fas fa-compass icon"></Icon> */}
            <Icon type="search" className="icon" />
            <a className="desktop">Explore</a>
          </div>
        </Link>
        <Link href="/settings">
          <div>
            {/* <Icon medium className="fas fa-cog icon"></Icon> */}
            <Icon type="setting" className="icon" />
            <a className="desktop">Settings</a>
          </div>
        </Link>
        <Link href="/">
          <div>
            {/* <Icon medium className="fas fa-sign-out-alt icon"></Icon> */}
            <Icon type="logout" className="icon" />
            <a className="desktop">Log out</a>
          </div>
        </Link>
      </Links>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  box-sizing: border-box;
  padding: 40px 0;
  height: 100vh;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  .mobile {
    display: none;
  }

  .mobile-avatar {
    display: none;
  }

  .name {
    font-weight: 500;
  }

  @media (max-width: 500px) {
    padding: 30px 0;
    width: 50px;
    transition: width 2s ease;

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }

    .mobile-avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .mobile-icon {
      margin-bottom: 20px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;

  div {
    margin: 20px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    width: 40px;
    text-align: center;
  }
`;

export default Navigation;
