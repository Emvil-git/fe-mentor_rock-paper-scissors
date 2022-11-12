import { useState } from "react"
import { useBEM } from "../../../hooks/useBEM"

const GameBtn = ({type}) => {
    const [B,E] = useBEM('game-btn')
    const [isPressed, setIsPressed] = useState(false)

    // TODO: cleanup type handling
    
    const handleIcon = () => {
        switch(type){
            case 'scissors':
                return "/images/icon-scissors.svg"
            case 'spock':
                return "/images/icon-spock.svg"
            case 'paper':
                return "/images/icon-paper.svg"
            case 'lizard':
                return "/images/icon-lizard.svg"
            case 'rock':
                return "/images/icon-rock.svg"
        }
    }

    const handleBorderColor = () => {
        switch(type){
            case 'scissors':
                return (
                    <linearGradient id="linear-sc" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ec9e0e"/>
                        <stop offset="100%" stop-color="#eca922"/>
                    </linearGradient>
                )
            case 'spock':
                return (
                    <linearGradient id="linear-sp" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#40b9ce"/>
                        <stop offset="100%" stop-color="#52bed1"/>
                    </linearGradient>
                )
            case 'paper':
                return (
                    <linearGradient id="linear-pp" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#4865f4"/>
                        <stop offset="100%" stop-color="#5671f5"/>
                    </linearGradient>
                )
            case 'lizard':
                return (
                    <linearGradient id="linear-lz" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#834fe3"/>
                        <stop offset="100%" stop-color="#8c5de5"/>
                    </linearGradient>
                )
            case 'rock':
                return (
                    <linearGradient id="linear-rk" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#dc2e4e"/>
                        <stop offset="100%" stop-color="#dd405d"/>
                    </linearGradient>
                )
        }
    }

    const borderId = () => {
        switch(type){
            case 'scissors':
                return "url(#linear-sc)";
            case 'spock':
                return "url(#linear-sp)";
            case 'paper':
                return "url(#linear-pp)";
            case 'lizard':
                return "url(#linear-lz)";
            case 'rock':
                return "url(#linear-rk)";
        }
    }

    const shadowColor = () => {
        switch(type){
            case 'scissors':
                return {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #dc8902"};
            case 'spock':
                return {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #229eb1"};
            case 'paper':
                return {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #2651d5"};
            case 'lizard':
                return {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #5c2dc5"};
            case 'rock':
                return {boxShadow: "inset 0 6px 0 0 #d2d7e2, 0 8px 0 0 #bd103d"};
        }
    }

    const handlePressStyle = () => {
        if (isPressed) return B('pressed');
        return B();
    }

    return(
        <div onMouseDown={() => {setIsPressed(true)}} onMouseUp={() => setIsPressed(false)} style={shadowColor()} className={handlePressStyle()}>
            <svg className={E('border')} height="138" width="138">
            <defs>
                {handleBorderColor()}
                {/* <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#05a"/>
                    <stop offset="100%" stop-color="#0a5"/>
                </linearGradient> */}
            </defs>
                <circle cx="69" cy="69" r="60" stroke={borderId()} stroke-width="18" fill="none" />
            </svg>
            <img className={E('icon')} src={handleIcon()} alt="" />
        </div>
    )
}

export default GameBtn