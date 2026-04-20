import React, { useEffect, useRef } from 'react';

const PremiumVibeBg = ({ theme }) => {
    const interactiveRef = useRef(null);

    useEffect(() => {
        const interBubble = interactiveRef.current;
        let curX = 0;
        let curY = 0;
        let tgX = window.innerWidth / 2;
        let tgY = window.innerHeight / 2;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            if (interBubble) {
                interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            requestAnimationFrame(move);
        };

        const handleMouseMove = (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const isLight = theme === 'personal';

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            overflow: 'hidden',
            zIndex: -2,
            background: isLight ? '#FAFAFA' : '#05050A',
            transition: 'background 0.5s ease',
            pointerEvents: 'none'
        }}>
            {/* Soft Organic Orbs */}
            <div style={{
                position: 'absolute',
                top: '-20%', left: '-10%', width: '60vw', height: '60vw',
                borderRadius: '50%',
                background: isLight ? 'radial-gradient(circle, #FF6B9E 0%, transparent 70%)' : 'radial-gradient(circle, #00E5FF 0%, transparent 70%)',
                opacity: isLight ? 0.3 : 0.25,
                filter: 'blur(120px)',
                animation: 'orbit 25s linear infinite'
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '-20%', right: '-10%', width: '70vw', height: '70vw',
                borderRadius: '50%',
                background: isLight ? 'radial-gradient(circle, #00C9A7 0%, transparent 70%)' : 'radial-gradient(circle, #D500F9 0%, transparent 70%)',
                opacity: isLight ? 0.25 : 0.2,
                filter: 'blur(130px)',
                animation: 'orbit 30s linear infinite reverse'
            }} />
            
             <div style={{
                position: 'absolute',
                top: '40%', left: '30%', width: '50vw', height: '50vw',
                borderRadius: '50%',
                background: isLight ? 'radial-gradient(circle, #845EC2 0%, transparent 70%)' : 'radial-gradient(circle, #651FFF 0%, transparent 70%)',
                opacity: isLight ? 0.15 : 0.15,
                filter: 'blur(100px)',
                animation: 'pulseBg 15s ease-in-out infinite alternate'
            }} />

            {/* Interactive Mouse Follower */}
            <div ref={interactiveRef} style={{
                position: 'absolute',
                top: '-25vw', left: '-25vw', /* Offset by half width/height to center */
                width: '50vw', height: '50vw',
                borderRadius: '50%',
                background: isLight ? 'radial-gradient(circle, #ffffff 0%, transparent 60%)' : 'radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, transparent 60%)',
                zIndex: 0,
                filter: 'blur(90px)',
                mixBlendMode: isLight ? 'overlay' : 'screen',
                transition: 'background 0.5s ease'
            }} />
            
            {/* Grain Overlay to make it feel tangible/premium */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                opacity: isLight ? 0.04 : 0.03,
                zIndex: 1,
                mixBlendMode: isLight ? 'normal' : 'overlay'
            }} />

            <style>{`
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
                }
                @keyframes pulseBg {
                    0% { transform: scale(1) translate(0, 0); }
                    100% { transform: scale(1.1) translate(30px, -20px); }
                }
            `}</style>
        </div>
    );
};

export default PremiumVibeBg;
