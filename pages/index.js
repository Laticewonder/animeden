import Category from "../components/Category";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Results from "../components/Results";
import requests from "../components/requests";

const Home = (props) => {
  console.log(props)
  return ( 
    <div className="container" >
    <Header/>
    <Feature/>
    <Category/>
    <Results/>
    </div>  
  );

}

export async function serverSideProps(){
  const category = context.query.q

  const request= await fetch(`https://gogoanime.herokuapp.com${requests[category]?.url ||
   requests.top.url}`)
 
   
  return{
    props:data   
  }
}



 
export default Home;