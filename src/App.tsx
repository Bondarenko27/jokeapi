import React,{ useEffect, useState } from 'react';
import './App.css';
interface joke{
  error: boolean,
  category:string,
  setup:string,
  delivery:string,
  type:string,
  joke:string,
  flags:any,
  id:number,
  safe:boolean,
  lang:string
  
}
function App() {
  
const [loading, setLoading] = useState(false);
const [jokes,setJokes]= React.useState<joke|null>(null)
const [two,setTwo]= React.useState<joke|null>(null)

const FetchJoke = async()=> {
    setLoading(true);
    setJokes(null);
    setTwo(null)
    const Fetch= async ()=> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const resp = await fetch(" https://v2.jokeapi.dev/joke/programming",{
        method:"GET"
        })
        .then(function(response){
        return response.json();
        
        })
        .then((response)=>{
            console.log(response)
            return response
        });
    return resp;
    }
    const FetchJoketwo= async ()=> {
        const resp = await fetch(" https://v2.jokeapi.dev/joke/programming",{
          method:"GET"
        })
        .then(function(response) {
          return response.json();
          })
          .then((response)=>{
            console.log(response)
            return response
        });
        return resp
        }
    const res = await Fetch();
    const restwo = await FetchJoketwo();
    setJokes(res)
    setTwo(restwo)
    setLoading(false)
}
  return (
    <div className="App">

 <div className="FirstDiv">
    <>{loading ?
    <div className='loader'></div>  : null} 
       {jokes !== null ?  
      <> 
        <div className='joke'>{jokes.setup}</div>
        <div className='jokeres'> {jokes.delivery}</div>
        <div className='jokeres'> {jokes.joke}</div></>
        : null}

      </>
 </div>

<div className="SecondDiv">
      {loading ? <div className='loader'></div> : null}  
        { two!== null ? 
         <>
            <div className='jok'> {two.setup}</div>
            <div className='jokere'> {two.delivery}</div>
            <div className='jokere'> {two.joke}</div>
        </>
      : null}
</div>

     
     <div><button className='submit'onClick={() =>FetchJoke()}> Submit </button></div>
    
    </div>
  );

}

export default App;
