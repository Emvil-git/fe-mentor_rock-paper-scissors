import { useBEM } from "../../hooks/useBEM"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../hooks/reduxHooks"
import { selectHouseChoice, selectPlayerChoice, selectScore, setPlayerChoice, setHouseChoice } from "../../store/slices/gameSlice"
import GameBtn from "../game/gameButton/GameButton"

const Results = () => {
    const [B,E] = useBEM('results')

    const dispatch = useAppDispatch()

    const player = useSelector(selectPlayerChoice)
    const house = useSelector(selectHouseChoice)

    const condArr = [
        {
            val: 'rock',
            win : ['scissors', 'lizard'],
            lose : ['spock', 'paper'],
        },
        {
            val: 'paper',
            win : ['rock', 'spock'],
            lose : ['scissors', 'lizard'],
        },
        {
            val: 'scissors',
            win : ['paper', 'lizard'],
            lose : ['spock', 'rock'],
        },
        {
            val: 'lizard',
            win : ['paper', 'spock'],
            lose : ['rock', 'scissors'],
        },
        {
            val: 'spock',
            win : ['scissors', 'rock'],
            lose : ['paper', 'lizard'],
        },
    ]

    const choiceCond = condArr.find(cond => cond.val === player);

    const results = () => {
        switch(true){
            case player === house:
                return "DRAW!"
            case choiceCond.win.includes(house):
                return "YOU WIN"
            case choiceCond.lose.includes(house):
                return "YOU LOSE"
        }
    }

    const again = () => {
        dispatch(setHouseChoice(undefined))
        dispatch(setPlayerChoice(undefined))
    }

    console.log(choiceCond)

    return(
        <div className={B()}>
            <main className={E('cont')}>
                <section className={E('choice')}>
                    <h3 className={E('choice-label')}>YOU PICKED</h3>
                    <GameBtn type={player} isStatic={true}/>
                </section>
                <section className={E('res')}>
                    <span className={E('res-label')}>{results()}</span>
                    <button onClick={again} className={E('res-btn')}>PLAY AGAIN</button>
                </section>
                <section className={E('choice')}>
                    <h3 className={E('choice-label')}>THE HOUSE PICKED</h3>
                    <GameBtn type={house} isStatic={true}/>
                </section>
            </main>
        </div>
    )
}

export default Results