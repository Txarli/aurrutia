import React from 'react';
import { colors, font, size } from '../theme/theme';
import avatarUrl from '../images/avatar.jpg';
import Twitter from '../images/twitter.svg';
import LinkedIn from '../images/linkedin.svg';

import styled from 'styled-components';

export const Header = () => (
  <Wrapper>
    <HomeLink href="/">
      <Avatar src={avatarUrl} alt="Aitor Urrutia" /> Aitor Urrutia
    </HomeLink>

    <Social>
      <SocialItem icon={<Twitter />} url="https://twitter.com/aitorcurrutia" />
      <SocialItem icon={<LinkedIn />} url="https://twitter.com/aitorcurrutia" />
    </Social>
  </Wrapper>
);

const SocialItem: React.FC<{
  icon: React.ReactNode;
  url: string;
}> = ({ icon, url }) => (
  <SocialItemWrapper>
    <SocialIconWrapper>
      <SocialIcon href={url}>{icon}</SocialIcon>
    </SocialIconWrapper>
  </SocialItemWrapper>
);

const SocialItemWrapper = styled.li`
  &:not(:last-child) {
    margin-right: ${size.base}px;
  }
`;

const SocialIconWrapper = styled.div`
  height: ${size.medium}px;
  width: ${size.medium}px;
`;

const SocialIcon = styled.a`
  svg > path {
    fill: ${colors.grey};
  }
`;

const Social = styled.ul`
  display: flex;
  list-style-type: none;
`;

const HomeLink = styled.a`
  display: flex;
  align-items: center;
  ${font.h3()}
`;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${size.medium}px;
  height: ${size.huge}px;
`;

const Avatar = styled.img`
  height: ${size.large}px;
  border-radius: 50%;
  margin-right: ${size.small}px;
`;
