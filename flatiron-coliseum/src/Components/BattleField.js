

function BattleField({ warriors, setWarriors }) {
    
    function battle()
    {
        let battlers = warriors.splice(0,2)
        console.log(battlers[0])
        console.log(warriors)
        let removed = warriors.filter(element=>element.name !== battlers[0].name|| element.name !== battlers[1].name)
        console.log(removed)
        //setWarriors(warriors=>warriors.filter(element=>element.name !== battlers[0].name || element.name !== battlers[1].name))
    } 
    
    return (
        <div>
            <h1>BattleField</h1>
            <button onClick={battle}>Battle!</button>

        </div>
    )
}

export default BattleField