import { useBEM } from "../../hooks/useBEM"

const Results = () => {
    const [B,E] = useBEM('results')

    return(
        <div className={B()}>
            results
        </div>
    )
}

export default Results