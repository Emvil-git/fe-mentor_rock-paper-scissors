import { useState } from "react"
import { useBEM } from "../../../hooks/useBEM"
import { useAppDispatch } from "../../../hooks/reduxHooks"
import { setPlayerChoice } from "../../../store/slices/gameSlice"

const GameBtn = ({type}) => {
    const [B,E] = useBEM('game-btn')
    const [isPressed, setIsPressed] = useState(false)

    const dispatch = useAppDispatch();
    
    const handleType = () => {
        switch(type){
            case 'scissors':
                return {
                    imgUrl: "/images/icon-scissors.svg",
                    svgDef: () => {
                        return (
                            <linearGradient id="linear-sc" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#ec9e0e"/>
                                <stop offset="100%" stop-color="#eca922"/>
                            </linearGradient>
                        )
                    },
                    borderId: "url(#linear-sc)",
                    boxShadow: {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #dc8902"},
                }

            case 'spock':
                return {
                    imgUrl: "/images/icon-spock.svg",
                    svgDef: () => {
                        return (
                            <linearGradient id="linear-sp" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#40b9ce"/>
                                <stop offset="100%" stop-color="#52bed1"/>
                            </linearGradient>
                        )
                    },
                    borderId: "url(#linear-sp)",
                    boxShadow: {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #229eb1"},
                }

            case 'paper':
                return {
                    imgUrl: "/images/icon-paper.svg",
                    svgDef: () => {
                        return (
                            <linearGradient id="linear-pp" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#4865f4"/>
                                <stop offset="100%" stop-color="#5671f5"/>
                            </linearGradient>
                        )
                    },
                    borderId: "url(#linear-pp)",
                    boxShadow: {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #2651d5"},
                }

            case 'lizard':
                return {
                    imgUrl: "/images/icon-lizard.svg",
                    svgDef: () => {
                        return (
                            <linearGradient id="linear-lz" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#834fe3"/>
                                <stop offset="100%" stop-color="#8c5de5"/>
                            </linearGradient>
                        )
                    },
                    borderId: "url(#linear-lz)",
                    boxShadow: {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #5c2dc5"},
                }

            case 'rock':
                return {
                    imgUrl: "/images/icon-rock.svg",
                    svgDef: () => {
                        return (
                            <linearGradient id="linear-rk" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#dc2e4e"/>
                                <stop offset="100%" stop-color="#dd405d"/>
                            </linearGradient>
                        )
                    },
                    borderId: "url(#linear-rk)",
                    boxShadow: {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #bd103d"},
                }
        }
    }

    const styleData = handleType();

    const handlePressStyle = () => {
        if (isPressed) return B('pressed');
        return B();
    }

    const mouseUp = () => {
        setIsPressed(false);
        dispatch(setPlayerChoice(type))
    }

    return(
        <div onMouseDown={() => {setIsPressed(true)}} onMouseUp={() => mouseUp()} style={styleData.boxShadow} className={handlePressStyle()}>
            <svg className={E('border')} height="138" width="138">
            <defs>
                {styleData.svgDef()}
            </defs>
                <circle cx="69" cy="69" r="60" stroke={styleData.borderId} stroke-width="18" fill="none" />
            </svg>
            <img className={E('icon')} src={styleData.imgUrl} alt="" />
        </div>
    )
}

export default GameBtn