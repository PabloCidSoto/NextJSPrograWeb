import Head from 'next/head'
import Card from '../components/Card'
import { useState } from "react";



export default function Home(){

    const [id, setId] = useState(1);

  return (
    <div>
      <Head>
        <title>Poke Api</title>
        <meta name='keywords' content='web develpment, programming'/>
      </Head>
      <input 
        type="number"
        defaultValue={id}
        onInput={e => setId(e.target.value)}
      />
      
      <Card id={id} />
      
      
      
    </div>
  )
}



export const getStaticProps = async () => {
    let url = ``;
    if(typeof value !== "undefined"){
        url = `https://pokeapi.co/api/v2/pokemon-form/${value}/`
    }
    url = `https://pokeapi.co/api/v2/pokemon-form/1/`
    const res = await fetch(url)
    const pokemon = await res.json()
  
    return {
      props:{
        pokemon
      }
    }
  }

  
  