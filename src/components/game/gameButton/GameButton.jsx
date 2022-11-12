import { useBEM } from "../../../hooks/useBEM"

const GameBtn = () => {
    const [B,E] = useBEM('game-btn')

    return(
        <div className={B()}>
            
        </div>
    )
}

export default GameBtn