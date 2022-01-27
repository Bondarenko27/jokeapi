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
const Fetch= async ()=> {
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
const res = await Fetch();
setJokes(res)
setLoading(false)
}


const FetchSecond = async()=> {
  setLoading(true);
  setTwo(null);
  const Fetch= async ()=> {
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
  setTwo(res)
  setLoading(false)
  }




  return (
    <div className="App">

 <div className="FirstDiv">
    <>{loading ?(<p>Loading ...</p>)/*: (<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> )*/: null} 
       { jokes!== null ?  
      <> 
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
       <div className='joke'> {jokes.setup}</div><div className='jokeres'> {jokes.delivery}</div>
      <div className='jokeres'> {jokes.joke}</div></>




      : null}

      </>
      </div>
      <div className="SecondDiv">
      <>{loading ?(<p>Loading ...</p>)/*: (<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> )*/:true}  
        { two!== null ? 
          <> 
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <div className='jok'> {two.setup}</div><div className='jokere'> {two.delivery}</div>
      <div className='jokere'> {two.joke}</div></>
      : null}
     </>
     </div>

     
     <div><button className='submit'onClick={() =>{FetchJoke();FetchSecond()} }> Submit </button></div>
    
    </div>
  );

}

export default App;
