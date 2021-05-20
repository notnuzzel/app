
import {
  Button,
  Flex,
  Heading,
  Stack,
  Box
} from '@chakra-ui/react'
import { Component, useState } from 'react'
import { signIn } from 'next-auth/client'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import Reward from 'react-rewards'

const timeout = (delay) => {
  return new Promise( res => setTimeout(res, delay) );
}

class SigninButton extends Component {

  constructor(props) {
    super(props)
    this.state = { isLoading: false }
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick() {
    this.setState({ isLoading: true })
    this.reward.rewardMe()
    await timeout(1500)
    signIn('twitter')
  }

  render() {
    const text = "Sign in with Twitter"
    return <Reward 
      type='emoji' 
      ref={(ref) => { this.reward = ref }}
      config={{
        emoji: ['🦔'],
        elementCount: 4
      }}
      >
      <Button
        rightIcon={<ArrowForwardIcon/>} 
        variant="outline"
        _hover={{ color: "black", background: "white" }}
        color="white"
        onClick={this.handleClick}
        isLoading={this.state.isLoading}
        loadingText={text}
        spinnerPlacement="end"
      >
        {text}
      </Button>
    </Reward>
  }
}

export default function LandingPage() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} spacing={0}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} style={{
        background: 'black'
      }}>
        <Stack w={'60vw'}>
          <Heading fontSize={'10em'} style={{
            color: 'white',
            lineHeight: '0px'
          }}>it's not*</Heading>
          <Heading fontSize={'14em'} style={{
            color: 'white'
          }}>nuzzel</Heading>
          <Flex pl={3} flex={1}>
            <SigninButton/>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  )
}