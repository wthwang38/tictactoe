import React from 'react';
import { useState } from 'react';

const Game = () => {
    const [player, setPlayer] = useState("X")
    const [container, setContainer] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState()

    const onClick = (index)=>{
        setPlayer(player === "O" ? "X" : "O");
        const tempContainer = [...container];
        tempContainer[index] = player;
        setContainer(tempContainer)
    }
    const winningStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const getWinner = () =>{
        winningStates.forEach((combo) => {
            const [x, y, z] = combo;
            if (
                container[x] !== "" &&
                container[x] === container[y] &&
                container[y] === container[z]
            ) {
                setWinner(container[x]);
                setContainer(Array(9).fill(""))
            }})
        }
        getWinner()
return (
    <div>
        <table>
            <tr className='row'>
                <td className="square" onClick={() => onClick(0)}>{container[0]}</td>
                <td className="square" onClick={() => onClick(1)}>{container[1]}</td>
                <td className="square" onClick={() => onClick(2)}>{container[2]}</td>
            </tr>
            <tr className='row'>
                <td className="square" onClick={() => onClick(3)}>{container[3]}</td>
                <td className="square" onClick={() => onClick(4)}>{container[4]}</td>
                <td className="square" onClick={() => onClick(5)}>{container[5]}</td>
            </tr>
            <tr className="row">
                <td className="square" onClick={() => onClick(6)}>{container[6]}</td>
                <td className="square" onClick={() => onClick(7)}>{container[7]}</td>
                <td className="square" onClick={() => onClick(8)}>{container[8]}</td>
            </tr>
        </table>
        <div>winner:{winner}</div>
    </div>
)
}

export default Game;