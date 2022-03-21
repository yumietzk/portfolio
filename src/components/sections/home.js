import React, { useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowDown } from 'react-icons/io';
import Navigation from '../UI/navigation/navigation';
import ImgSrc from '../../../assets/home-image.png';
import styled, { keyframes } from 'styled-components';

const Header = styled.header`
  height: 100vh;
  padding: 0 2rem;
  background-color: #f6d2c6;
  color: #081217;

  display: flex;
  flex-direction: column;
`;

const HeaderMain = styled.div`
  flex: 1;
  margin-top: 10rem;
  width: 80%;
  margin-left: 10%;
  position: relative;

  display: flex;
  align-items: center;

  // 1800px
  @media (min-width: 112.5rem) {
    margin-top: 11rem;
  }

  // 1200px
  @media (max-width: 75rem) {
    width: 90%;
    margin-left: 5%;
  }

  // 800px
  @media (max-width: 50rem) {
    margin-top: 9rem;
    flex-direction: column-reverse;
  }

  // 600px
  @media (max-width: 37.5rem) {
    margin-top: 8rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    margin-top: 6rem;
  }
`;

const HeaderLeft = styled.div`
  flex: 0 1 50%;
  padding-right: 7rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  // 1200px
  @media (max-width: 75rem) {
    padding-right: 4rem;
  }

  // 800px
  @media (max-width: 50rem) {
    flex: 0 1 40%;
    padding-right: 0;
    width: 100%;

    justify-content: flex-start;
    align-items: center;
  }

  // 600px
  @media (max-width: 37.5rem) {
    flex: 0 1 30%;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 2rem;

  // 1800px
  @media (min-width: 112.5rem) {
    font-size: 7.5rem;
  }

  // 1200px
  @media (max-width: 75rem) {
    font-size: 4.7rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 4rem;
    margin-bottom: 1.3rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    font-size: 3.5rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 3rem;
    margin-bottom: 0.2rem;
  }
`;

const Text = styled.div`
  font-size: 5rem;
  word-spacing: 4px;
  margin-bottom: 3rem;

  // 1800px
  @media (min-width: 112.5rem) {
    font-size: 8.5rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 6rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    font-size: 5.5rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 7rem;
    word-spacing: 3px;
  }
`;

const HeaderImage = styled.div`
  flex: 0 1 30%;
  margin: 0 auto;
  background-image: url(${ImgSrc});
  border-radius: 10rem;
  height: 70%;
  background-position: right;
  background-size: cover;

  // 1200px
  @media (max-width: 75rem) {
    flex: 0 1 40%;
  }

  // 800px
  @media (max-width: 50rem) {
    flex: 0 1 50%;
    margin: 5% 0;
    width: 50%;
  }

  // 600px
  @media (max-width: 37.5rem) {
    flex: 0 1 56%;
    margin: 7% 0;
    width: 70%;
  }

  // 450px
  @media (max-width: 28.125rem) {
    flex: 0 1 50%;
    margin: 10% 0;
    width: 85%;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  background: none;
  cursor: pointer;

  // 450px
  @media (max-width: 28.125rem) {
    bottom: 1rem;
  }
`;

const glowing = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.5);
}
100% {
  transform: scale(1);
`;

const ButtonIcon = styled(IoIosArrowDown)`
  font-size: 4rem;
  color: inherit;
  -webkit-appearance: none;
  animation: ${glowing} 2s infinite;

  // 1800px
  @media (min-width: 112.5rem) {
    font-size: 5rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 3.5rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    font-size: 3.3rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 2.8rem;
  }
`;

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Header id="top">
      <Navigation />
      <HeaderMain>
        <HeaderLeft data-aos="zoom-in">
          <Title>Hi, I'm Yumie 👋🏻</Title>
          <Text>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1900)
                  .typeString('A self-taught front-end developer.')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('A sushi lover.')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('A passionate soccer fan.')
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </Text>
        </HeaderLeft>
        <HeaderImage data-aos="flip-up"></HeaderImage>
      </HeaderMain>
      <Button onClick={() => scrollTo('#about')}>
        <ButtonIcon />
      </Button>
    </Header>
  );
};

export default Home;
