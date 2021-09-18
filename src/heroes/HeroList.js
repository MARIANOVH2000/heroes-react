import React, { useMemo } from 'react'
import { hetHeroesByPublisher } from '../selectors/hetHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    //guardar datos si es el mismo id para luego volver a tomarlos y si cambia el id volver a llamarlo
    const heroes=useMemo(() =>hetHeroesByPublisher(publisher), [publisher]);
    
    return (
        <div className='row animate__animated animate__fadeIn'>
             {
                heroes.map(hero=>(
                    <HeroCard key={hero.id}{...hero} />
                ))
            }  
            
        </div>
    )
}
