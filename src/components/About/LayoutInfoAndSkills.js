import React from "react";
import styled from "styled-components";

const LayoutInfoAndSkillsStyled = styled.div`
  .ml {
    margin-left: 8px;
  }
  .red {
    color: rgb(224, 80, 80);
  }

  display: grid;
  margin: 2em 0;
  line-height: 1.5;
  grid-template-columns: repeat(auto-fill, 45%);
  grid-gap: 10%;

  .title {
    font-size: 36px;
    text-align: center;
  }
  .info {
    display: inline;
    font-size: 20px;
    font-weight: 400;
    position: relative;
    top: 1em;
  }
  .containerInfo {
    margin: 0 2em;
  }
  .containerSkills {
    margin: 0 2em;

    .skills {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      font-weight: 400;
      line-height: 2;
      margin: 0.8em 0;
      font-size: 20px;
    }
  }

  /* ---------MEDIA QUERYS--------------*/
  @media screen and (max-width: 1280px) {
    .title {
      font-size: 30px;
      text-align: center;
    }
    .info {
      font-size: 18px;
    }
    .containerSkills {
      .skills {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 940px) {
    .title {
      font-size: 24px;
      text-align: center;
    }
    .containerInfo {
      margin: 0 0 0 1.2rem;
    }
    .info {
      font-size: 16px;
    }
    .containerSkills {
      .skills {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 60%;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    margin: auto;

    .title {
      margin-top: 1em;
    }
    .containerSkills {
      margin: 0 0 0 1.2rem;
    }
  }
  @media screen and (max-width: 578px) {
    width: 96%;
    .containerInfo {
      margin: 0 0 0 0.5rem;
    }
    .containerSkills {
      margin: 0 0 0 0.5rem;
    }
  }
  @media screen and (max-width: 490px) {
    .containerInfo {
      margin: 0 0 0 0.9rem;
    }
    .containerSkills {
      margin: 0 0 0 0.9rem;
    }
  }
  @media screen and (max-width: 414px) {
    .containerInfo {
      margin: 0 0 0 1.2rem;
    }
    .containerSkills {
      margin: 0 0 0 1.2rem;
    }
  }

  @media screen and (max-width: 370px) {
    grid-gap: 20px;
  }
`;
const layoutInfoAndSkills = () => {
  return (
    <LayoutInfoAndSkillsStyled>
      <div className="containerInfo">
        <h2 className="title">Something about me</h2>
        <p className="info">Hello!</p>
        <p className="info ml red">I'm Sebastian - Web Developer</p>
        <p className="info ml">
          from Canelones, Uruguay. I am currently a software engineering
          student. I have no prior experience working in a company, but you can
          see my demos on the work page. I like frontend & backend, and of
          course the minimalist and elegant websites.
        </p>
      </div>
      <div className="containerSkills">
        <h2 className="title">My knowledge</h2>
        <div className="skills">
          <p>HTML</p>
          <p>CSS 3</p>
          <p>JavaScript</p>
          <p>Bootstrap</p>
          <p>React JS</p>
          <p>Redux</p>
          <p>Node JS</p>
          <p>Express</p>
          <p>Firebase</p>
          <p>MongoDB</p>
          <p>NPM</p>
          <p>Git</p>
        </div>
      </div>
    </LayoutInfoAndSkillsStyled>
  );
};

export default layoutInfoAndSkills;
