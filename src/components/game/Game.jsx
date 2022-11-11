import { useBEM } from "../../hooks/useBEM"

const Game = () => {
    const [B,E] = useBEM('game')

    return(
        <div className={B()}>

        </div>
    )
}

export default Game