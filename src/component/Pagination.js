import React,{ useState} from 'react'
import styled from 'styled-components'
import {ArrowForward} from '@material-ui/icons'
import {ArrowBack} from '@material-ui/icons'

function Pagination({totalPost, postsPerPage, paginate, next, previous}) {
    const pageNumbers = [];
    const [pageNumber, setPageNumber] = useState(Math.ceil(totalPost / postsPerPage))

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers.length, pageNumber)

    return (
        <PaginGrid>
        <PaginationWrapper>
            <Paginations>
            {pageNumber > 1 && <ArrowBackIcon onClick={() => {
                previous()
                setPageNumber(prev => prev -1)
            }} /> }
                {pageNumbers.map(pageNumber => (
                    <PaginationSpan onClick={() => {
                        setPageNumber(pageNumber)
                        paginate(pageNumber)
                    } }>
                        {pageNumber}
                    </PaginationSpan>
                ))}
                {pageNumber != pageNumbers.length -1 ? '' : <ArrowForwardIcon onClick={() => {
                setPageNumber(prev => prev + 1)
                next()
            } }/>}

            </Paginations>
            
        </PaginationWrapper>
        </PaginGrid>
    )
}

export default Pagination

const PaginGrid = styled.div`
width: 100%;
height: 100%;
display: grid;
place-items: center;
`

const PaginationWrapper = styled.div`
width: 200px;
height: 100px;
display: grid;
place-items: center;
background-color: #fff;

` 
const Paginations = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

const PaginationSpan = styled.p`
background-color: gray;
color: #fff;
padding: 10px;
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
font-size: 1.3rem;
display: grid;
place-items: center;
margin-right: 10px;
cursor: pointer

`

const ArrowForwardIcon = styled(ArrowForward)`
width: 1.5rem !important;
height: 1.5rem !important;
cursor: pointer;
color: gray;
transition: all .3;
&:hover {
    transform: scale(1.05);
}
`
const ArrowBackIcon = styled(ArrowBack)`
width: 1.5rem !important;
height: 1.5rem !important;
cursor: pointer;
color: gray;
margin-right: 10px;
transition: all .3;
&:hover {
    transform: scale(1.05);
}
`
