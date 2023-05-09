import React from 'react'
import styled from 'styled-components'
import ImgSummaryBackground from '../../papkaImgicon/imgs/background-summary.jpg'
import { SummaryCard } from './SummaryCard'
export const Summary = () => {
  return (
    <Container>
        <ImgBackground src={ImgSummaryBackground} alt="img" />
        <SummaryCard/>
      
    </Container>
  )
}


const Container = styled.div`
    height: 527px;
`
const ImgBackground = styled.img`
    height: 432px ;
    margin-top: -20px;
    width:100%;
`