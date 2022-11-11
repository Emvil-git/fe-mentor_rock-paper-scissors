import { useBEM } from "../../hooks/useBEM"

const Results = () => {
    const [B,E] = useBEM('results')

    return(
        <div className={B()}>

        </div>
    )
}

export default Results