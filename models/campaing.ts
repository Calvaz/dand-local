export default interface Campaign{    
    Id: number
    DungeonMaster: string
    Name: string
    Players: Character[]
    Locations: Location[]  
    Charachters: Character[]    
}

interface Character{
    Name: string
    Class: string
    Description: string
}
interface Location{
    Name: string
    Description: string
}

