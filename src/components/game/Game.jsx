import { useBEM } from "../../hooks/useBEM"

const Game = () => {
    const [B,E] = useBEM('game')

    return(
        <div className={B()}>

            {/* webpack is acting weird so i did this little trick with the bg pentagon ;) */}
            <section className={E('bg-trick')}>
                <img
                src="/images/bg-pentagon.svg"
                alt="pentagon-bg"
                className={E('pentagon')}
                />
            </section>

            <main>
                
            </main>
        </div>
    )
}

export default Game