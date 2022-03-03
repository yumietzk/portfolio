import React, { useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowDown } from 'react-icons/io';
import Navigation from '../UI/navigation/navigation';
import ImgSrc from '../../../assets/home-image.png';
import styled, { keyframes } from 'styled-components';
// import * as styles from './home.module.css';

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
`;

const HeaderLeft = styled.div`
  flex: 0 1 60%;
  padding-right: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  font-size: 5rem;
  word-spacing: 4px;
  margin-bottom: 3rem;
`;

const HeaderImage = styled.div`
  flex: 1;
  background-image: url(${ImgSrc});
  border-radius: 10rem;
  height: 70%;
  background-position: right;
  background-size: cover;
`;

const Button = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  background: none;
  cursor: pointer;
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
  animation: ${glowing} 2s infinite;
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
    // <header className={styles.header} id="top">
    //   <Navigation />
    //   <div className={styles.headerTitle}>
    //     <div className={styles.headerText} data-aos="zoom-in">
    //       <h1>Hi, I'm Yumie 👋🏻</h1>
    //       <Typewriter
    //         options={{
    //           loop: true,
    //         }}
    //         onInit={(typewriter) => {
    //           typewriter
    //             .pauseFor(1900)
    //             .typeString('A self-taught front-end developer.')
    //             .pauseFor(2000)
    //             .deleteAll()
    //             .typeString('A sushi lover.')
    //             .pauseFor(2000)
    //             .deleteAll()
    //             .typeString('A passionate soccer fan.')
    //             .pauseFor(2000)
    //             .deleteAll()
    //             .start();
    //         }}
    //       />
    //     </div>
    //     <div className={styles.headerImg} data-aos="flip-up"></div>
    //   </div>
    //   <button className={styles.btn} onClick={() => scrollTo('#about')}>
    //     <IoIcons.IoIosArrowDropdownCircle className={styles.btnIcon} />
    //   </button>
    // </header>
  );
};

export default Home;
