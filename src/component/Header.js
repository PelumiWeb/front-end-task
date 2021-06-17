// import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Home, Search} from '@material-ui/icons'
import { Avatar} from '@material-ui/core'

function Header({searchProducts,setSearchProduct}) {

    return (
        <HeaderComponent>
            <HomeIcon />
            <InputContainer>
            <Input placeholder='Input to search by name or category' value={searchProducts} onChange={(e) => setSearchProduct(e.target.value)}/>
            <SearchIcon  onClick={() => console.log('clicked')}/>
            </InputContainer>
            <AvatarIcon />
        </HeaderComponent>
    )
}

export default Header

const HeaderComponent = styled.header`
width: 100%;
height: 100px;
background-color: white;
box-shadow: 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);
display: flex;
justify-content: space-around;
align-items: center;
`
const InputContainer = styled.div`
width: 500px;
padding: 10px;
display: flex;
align-items: center;
border-radius: 10px;
background-color: whitesmoke;


`
const Input = styled.input`
height: 2rem;
width: 400px;
border: none;
padding: 10px;
outline: none;
font-size: 1.2rem
`
const HomeIcon = styled(Home)`
width: 3rem !important;
height: 3rem !important;
color: gray;
cursor: pointer
`

const SearchIcon = styled(Search)`
width: 2rem !important;
height: 2rem !important;
margin-left: 10px;
cursor: pointer

`

const AvatarIcon = styled(Avatar)`
cursor: pointer;
width: 3rem !important;
height: 3rem!important;
`


