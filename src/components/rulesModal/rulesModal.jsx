import { useBEM } from "../../hooks/useBEM"

const RulesModal = () => {
    const [B,E] = useBEM('rules')

    return(
        <div className={B()}>

        </div>
    )
}

export default RulesModal