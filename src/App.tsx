import React from 'react';
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
const [jokes,setJokes]= React.useState<joke|null>(null)
 
const FetchJoke = async()=> {
setJokes(null);
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
setJokes(res)
}




  return (
    <div className="App">
       { jokes !== null ? 
      <><div className='joke'> {jokes.setup}</div><div className='jokeres'> {jokes.delivery}</div>
      <div className='jokeres'> {jokes.joke}</div></>
      : null}
     <div><button className='submit'onClick={() => FetchJoke()}>Submit</button></div>
    
    </div>
  );

}

export default App;
