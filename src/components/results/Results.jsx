import { useBEM } from "../../hooks/useBEM"
import { useSelector } from "react-redux"
import { selectHouseChoice, selectPlayerChoice } from "../../store/slices/gameSlice"
import GameBtn from "../game/gameButton/GameButton"

const Results = () => {
    const [B,E] = useBEM('results')
    const player = useSelector(selectPlayerChoice)
    const house = useSelector(selectHouseChoice)

    return(
        <div className={B()}>
            <main className={E('cont')}>
                <section className={E('choice')}>
                    <h3 className={E('choice-label')}>YOU PICKED</h3>
                    <GameBtn type={player} isStatic={true}/>
                </section>
                <section className={E('res')}>
                    <span className={E('res-label')}>YOU LOSE</span>
                    <button className={E('res-btn')}>PLAY AGAIN</button>
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