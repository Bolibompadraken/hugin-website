import * as React from 'react'
import styled from "@emotion/styled";
import HuginMessenger from '../images/HuginMessenger.png';
import {FaGithub} from "react-icons/all";


const Section = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  background-color: #1d1d1d;
  padding-top: 15em;
  padding-bottom: 10em;
`

const Container = styled.div`
  max-width: 1400px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const GithubButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: #6e5494;
  padding: 10px 20px;
  font-weight: 600;
  transition: 250ms;
  text-decoration: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #919191;
  }
`

const Button = styled.a`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 15px 20px;
  font-weight: 600;
  transition: 250ms;
  text-decoration: none;
  color: #1d1d1d;
  border: 1px solid;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
`

const TextContent = styled.div`
  max-width: 600px;
  padding-right: 30px;

  @media screen and (max-width: 1000px) {
    order: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }
`


const Title = styled.h1`
  color: white;
  font-weight: 600;
  margin: 10px 0;
`

const SubTitle = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.53);
  font-weight: 200;
  margin: 0;
`

const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75rem;
`

const Screenshot = styled.img`
  width: 40%;


  @media screen and (max-width: 1000px) {
    width: 60%;

  }

  @media screen and (max-width: 579px) {
    width: 100%;

  }
`

const HuginDesktop = () => {
    return (
        <Section>
            <Container>
                <TextContent>
                    <SubTitle>Presenting</SubTitle>
                    <Title>Hugin Desktop</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                    <div style={{display: "flex", gap: "10px"}}>
                        <Button href="#download">Download</Button>
                        <GithubButton href="https://github.com/kryptokrona/">Github <FaGithub size="2em"/></GithubButton>
                    </div>
                </TextContent>
                <Screenshot src={HuginMessenger}/>
            </Container>
        </Section>
    )
}

export default HuginDesktop