import React, { useEffect, useState, useRef } from 'react';
import test_image from '../Assets/images/test-image-portrait.png';



const Base = ({ onLogUpdate }) => {
    const canvasRef = useRef(null);
    // const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [markers, setMarkers] = useState([]);
    const [log, setLog] = useState([]);

    const addActionToLog = (action_id, action_text) => {
        const newLogEntry = { action_id, action_text };
        setLog((prevLog) => {
            const updatedLog = [...prevLog, newLogEntry];
            onLogUpdate(updatedLog); // Notify parent component about the log update
            return updatedLog;
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();
        image.src = test_image;

        image.onload = () => {
            const containerWidth = canvas.parentNode.offsetWidth;
            const containerHeight = canvas.parentNode.offsetHeight;

            const imageAspectRatio = image.width / image.height;
            const containerAspectRatio = containerWidth / containerHeight;

            let canvasWidth, canvasHeight;

            if (imageAspectRatio > containerAspectRatio) {
                canvasWidth = containerWidth;
                canvasHeight = canvasWidth / imageAspectRatio;
            } else {
                canvasHeight = containerHeight;
                canvasWidth = canvasHeight * imageAspectRatio;
            }

            canvas.width = canvasWidth;
            canvas.height = canvasHeight;

            context.drawImage(image, 0, 0, canvasWidth, canvasHeight);

            // setCanvasSize({ width: canvasWidth, height: canvasHeight });
            addActionToLog(1, 'Image loaded');
        };

        image.onerror = () => {
            addActionToLog(2, 'Error occurred while loading image');
        };
    }, []);

    const drawMarker = (context, marker, index, markers) => {
        let pointColor;
        switch ((index + 1) % 4) {
            case 1:
                pointColor = 'green';
                break;
            case 2:
                pointColor = 'red';
                break;
            case 3:
                pointColor = 'green';
                break;
            case 0:
                pointColor = 'red';
                break;
            default:
                pointColor = 'black';
                break;
        }

        const outerRadius = 8;
        context.beginPath();
        context.arc(marker.x, marker.y, outerRadius, 0, 2 * Math.PI, false);
        context.strokeStyle = pointColor;
        context.lineWidth = 1;
        context.stroke();

        const innerRadius = 4;
        context.beginPath();
        context.arc(marker.x, marker.y, innerRadius, 0, 2 * Math.PI, false);
        context.fillStyle = pointColor;
        context.fill();

        if ((index + 1) % 4 === 0) {
            const quadStartIndex = index - 3;
            context.beginPath();
            context.moveTo(markers[quadStartIndex].x, markers[quadStartIndex].y);
            context.lineTo(markers[quadStartIndex + 1].x, markers[quadStartIndex + 1].y);
            context.strokeStyle = 'green';
            context.lineWidth = 1;
            context.stroke();

            context.beginPath();
            context.moveTo(markers[quadStartIndex + 1].x, markers[quadStartIndex + 1].y);
            context.lineTo(markers[quadStartIndex + 2].x, markers[quadStartIndex + 2].y);
            context.strokeStyle = 'red';
            context.lineWidth = 1;
            context.stroke();

            context.beginPath();
            context.moveTo(markers[quadStartIndex + 2].x, markers[quadStartIndex + 2].y);
            context.lineTo(markers[quadStartIndex + 3].x, markers[quadStartIndex + 3].y);
            context.strokeStyle = 'green';
            context.lineWidth = 1;
            context.stroke();

            context.beginPath();
            context.moveTo(markers[quadStartIndex + 3].x, markers[quadStartIndex + 3].y);
            context.lineTo(markers[quadStartIndex].x, markers[quadStartIndex].y);
            context.strokeStyle = 'red';
            context.lineWidth = 1;
            context.stroke();
        } else if ((index + 1) % 4 !== 1) {
            context.beginPath();
            context.moveTo(markers[index - 1].x, markers[index - 1].y);
            context.lineTo(markers[index].x, markers[index].y);
            context.strokeStyle = (index % 4 === 1) ? 'green' : 'red';
            context.lineWidth = 1;
            context.stroke();
        }
    };

    const drawAllMarkers = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        const image = new Image();
        image.src = test_image;
        image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        markers.forEach((marker, index) => {
            drawMarker(context, marker, index, markers);
        });
        };
    };

    const handleMouseDown = (event) => {

        if (event.button === 2) {
          
            setMarkers((prevMarkers) => {
                if (prevMarkers.length % 4 !== 0 && prevMarkers.length > 0) {
                    addActionToLog(3, 'Point removed');
                    return prevMarkers.slice(0, -1);
                }
                return prevMarkers;
            });
            return;
        }
        else if (event.button === 0) {
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const marker = {
                x: mouseX,
                y: mouseY
            };

            setMarkers((prevMarkers) => {
                const newMarkers = [...prevMarkers, marker];
                const actionText = (newMarkers.length % 4 === 0) ? 'Rectangle complete' : 'Point placed';
                addActionToLog(4, actionText);
                const context = canvas.getContext('2d');
                drawMarker(context, marker, newMarkers.length - 1, newMarkers);
                return newMarkers;
            });
        }


    };

    useEffect(() => {
        drawAllMarkers();
    }, [markers]);

    return (
        <div className='flex justify-center items-center h-full'>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <canvas
                    onMouseDown={handleMouseDown}
                    onContextMenu={(e) => e.preventDefault()}
                    ref={canvasRef}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            </div>
        </div>
    );
};

export default Base;