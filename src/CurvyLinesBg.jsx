import React, { useEffect, useRef } from 'react';

const CurvyLinesBg = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let offset = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Personal theme accent color with very low opacity
            ctx.strokeStyle = 'rgba(255, 107, 158, 0.15)'; 
            ctx.lineWidth = 1.5;

            const lineSpacing = 30;
            const waveAmplitude = 40;
            const waveLength = 400;

            for (let y = -waveAmplitude; y < canvas.height + waveAmplitude; y += lineSpacing) {
                ctx.beginPath();
                for (let x = 0; x <= canvas.width; x += 10) {
                    // Create a natural wavy movement using multiple sine waves
                    const dx = x / waveLength;
                    const dy = Math.sin(dx + offset) * waveAmplitude + 
                               Math.sin(dx * 2 + offset * 0.5) * (waveAmplitude / 2);
                    
                    if (x === 0) ctx.moveTo(x, y + dy);
                    else ctx.lineTo(x, y + dy);
                }
                ctx.stroke();
            }

            offset += 0.005; // Slow movement
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -2,
                pointerEvents: 'none'
            }}
        />
    );
};

export default CurvyLinesBg;
