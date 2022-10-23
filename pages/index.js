import Category from "../components/Category";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Results from "../components/Results";
import requests from "../components/requests";

const Home = ({request}) => {
  return ( 
    <div className="container" >
    <Header/>
    <Feature/>
    <Category/>
    <Results result={request}/>
    </div>  
  );

}

export async function getServerSideProps(context){
  const category = context.query.q

  const request= await fetch(`https://gogoanime.herokuapp.com${requests[category]?.url ||
   requests.top.url}`)
   

  return{
    props:{
      request: await request.json()
    }  
  }
}



 
export default Home;