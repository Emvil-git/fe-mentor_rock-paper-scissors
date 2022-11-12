import { useAppDispatch } from "../../hooks/reduxHooks";
import { useBEM } from "../../hooks/useBEM";
import { setIsModalShow } from "../../store/slices/gameSlice";

const RulesModal = () => {
    const [B,E] = useBEM('rules')
    const dispatch = useAppDispatch();

    return(
        <div className={B()}>
            <main className={E('cont')}>
                <header className={E('header')}>
                    <h2>RULES</h2>
                    <img onClick={() => {dispatch(setIsModalShow(false))}} className={E('icon')} src="/images/icon-close.svg" alt="" />
                </header>
                <img src="/images/image-rules-bonus.svg" alt="rules of the game" />
            </main>
        </div>
    )
}

export default RulesModal