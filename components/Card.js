import Image from 'next/image'


import useSWR from 'swr'
import pokemonStyles from '../styles/Pokemon.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Card = ({id}) => {
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon-form/${id}/`, fetcher)
    
    
    
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

  
    return (
        <>    
            
            <div className={pokemonStyles.card}>
                <h2>{data.name}</h2>
                <Image 
                    src={data.sprites.front_default}
                    width={120}
                    height={120}
                    alt={data.name} 
                />      
                <p>
                    Version {data.version_group.name}
                </p>

            </div>
        </>
    )
}

export default Card