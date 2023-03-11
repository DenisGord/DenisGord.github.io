import React, { useEffect, useRef, useState } from 'react';
import './style.css'
export const DNDCard = ({ id, letter, x, setConuter, block }) => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 250 })
    const [moveRoot, setMoveRoot] = useState(true)
    const [blockCoordinate, setBlockCoordinate] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const arr = []

            block.current.querySelectorAll('.drop-zone').forEach((item) => {
                const rect = item.getBoundingClientRect();
                const { innerText } = item
                const { left, right, bottom, top } = rect

                arr.push({ left: left - block.current.offsetLeft, right: right - block.current.offsetLeft, top, bottom, innerText })
            })
            setBlockCoordinate(arr)
        }, 100)

    }, [])


    useEffect(() => {
        setCoordinates({ x, y: 250 })
    }, [x])

    const styleTag = {
        position: 'absolute',
        top: coordinates.y,
        left: coordinates.x
    };
    const onMouseDown = (e) => {
        e.preventDefault();
        let shiftX = e.clientX - coordinates.x;
        let shiftY = e.clientY - coordinates.y;

        const moveAt = (pageX, pageY) => {
            if (moveRoot) {
                let x = pageX - shiftX;
                let y = pageY - shiftY;
                if (x < 0) {
                    x = 0;
                }
                if (y < 0) {
                    y = 0;
                }

                blockCoordinate.forEach(({ top, left, right, bottom, innerText }, i) => {


                    if ((x > left) && (x + 80 < right) && (y > top) && (y + 80 < bottom) && (innerText.toLowerCase() === letter.toLowerCase())) {




                        x = left + 12.5
                        y = top + 12.5
                        window.removeEventListener('mousemove', onMouseMove);
                        setConuter((prev) => {
                            return prev + 1
                        })
                        setMoveRoot(false)
                    
                    }
                })



                setCoordinates({ x: x, y: y });
            }

        };
        moveAt(e.clientX, e.clientY);

        const onMouseMove = (event) => {

            moveAt(event.clientX, event.clientY);


        };

        window.addEventListener('mousemove', onMouseMove);

        window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', onMouseMove);
        });
    };


    return (
        <div
            id={id}
            onMouseDown={onMouseDown}
            className='drop-card'
            style={styleTag}
        >
            {letter}

        </div>
    );
};

