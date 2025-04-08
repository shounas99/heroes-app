import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    const validPublisher = ['DC Comics', 'Marvel Comics']
    
    if( validPublisher.includes(validPublisher)){
        throw new Error(`${ publisher } isn't a valid publisher`)
    }
    return heroes.filter(heroes => ( heroes.publisher === publisher))
}