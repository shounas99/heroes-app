import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( //call the function whenever the publisher changes
        () => getHeroesByPublisher( publisher), [publisher ]
    )


    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map((hero, id) => 
                    <HeroCard 
                        key={ id }
                        { ...hero } //send all the properties
                    />
                )
            }
        </div>
    )
}
