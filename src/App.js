import React,{ useState, useEffect} from 'react'
import CardComponent from './component/CardComponent'
import styled from 'styled-components'
import Header from './component/Header'
import Pagination from './component/Pagination'
import Loader from 'react-loader-spinner'
import axios from './axios'

function App() {
  const [data, setData] = useState([])
  const [searchProducts, setSearchProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [reqFailed, setReqFailed] = useState(false)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPage = indexOfLastPost - postsPerPage
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPost)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
       const req = await axios.get("/products")
       setData(req.data)
      }catch(e) {
        setReqFailed(true)
      }
       setLoading(false)
    }
    getData()
  }, [])

 const FilterData = () => (
  data.filter(data =>
   {
    if (searchProducts === "") {
      return data
    }
    else if (data.name.toLowerCase().includes(searchProducts.toLowerCase())){
      return data
    } else if (data.category.toLowerCase().includes(searchProducts.toLowerCase())) {
      return data
    }
    return null
   })
 )
 

 const paginate = (pageNumber) => setCurrentPage(pageNumber)
 const next = () => setCurrentPage((prev) => prev + 1 )
 const previous = () => setCurrentPage((prev) => prev - 1 )
 const Cards = () => (
  <CardWrapper> 
  {searchProducts ? FilterData().map(data => (
    <CardComponent key={data.id} post={data}  />
  )) : 
  currentPost.map(data => (
    <CardComponent key={data.id} post={data}  />
  ))
   }
</CardWrapper>
 )
 
 const Loading = () => (
   <LoaderWrapper> 
    <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
   </LoaderWrapper>
     
 )


 const showContents = () => {
   if (loading) {
    return Loading() 
   } else if (reqFailed) {
      return <p>Couldn't fetch the data</p>
   } else {
    return Cards()
   }
  }
    


  return (
    <AppWrapper>
      <Header setSearchProduct={setSearchProduct} searchProducts={searchProducts} />
      {showContents()}
      <Pagination postsPerPage={postsPerPage} totalPost={data.length} paginate={paginate} next={next} previous={previous}/>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
width: 100%;
`
const CardWrapper = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
` 

const LoaderWrapper = styled.div`
display: grid;
place-items: center;
height: 100vh
`
