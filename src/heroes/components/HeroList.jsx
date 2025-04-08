import React from 'react'
import { getHeroesByPublisher } from '../helpers'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher)

    return (
        <ul>
            {
                heroes.map((hero, id) => 
                    <li key={id}>
                        {hero.superhero}
                    </li>
                )
            }
        </ul>
    )
}
