import { useBEM } from "../../hooks/useBEM";
import GameBtn from "./gameButton/GameButton";

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

            <main className={E('btn-cont')}>
                <section className={E('btn-sect')}>
                    <GameBtn/>
                </section>
                
                <section className={E('btn-sect')}>
                    <GameBtn/>
                    <GameBtn/>
                </section>
                
                <section className={E('btn-sect')}>
                    <GameBtn/>
                    <GameBtn/>
                </section>
            </main>
        </div>
    )
}

export default Game