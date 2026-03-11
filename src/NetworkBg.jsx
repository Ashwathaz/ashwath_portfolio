import React, { useEffect, useRef } from 'react';

const NetworkBg = ({ theme }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Theme colors
        const colors = {
            devops: {
                particle: 'rgba(56, 189, 248, 0.8)',
                line: 'rgba(56, 189, 248,'
            },
            personal: {
                particle: 'rgba(244, 63, 94, 0.8)',
                line: 'rgba(244, 63, 94,'
            }
        };

        const currentColors = colors[theme] || colors.devops;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Direction vectors
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.radius = Math.random() * 1.5 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = currentColors.particle;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            // Calculate particle density based on screen size
            let numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 120);
            
            // Make it more minimal for personal theme
            if (theme === 'personal') {
                numParticles = Math.floor(numParticles * 0.5); // 50% fewer particles
            }

            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const speedMultiplier = theme === 'personal' ? 0.4 : 1; // Slower movement for personal

            for (let i = 0; i < particles.length; i++) {
                // Apply speed multiplier
                particles[i].x += particles[i].vx * speedMultiplier;
                particles[i].y += particles[i].vy * speedMultiplier;

                // Bounce off edges
                if (particles[i].x < 0 || particles[i].x > canvas.width) particles[i].vx = -particles[i].vx;
                if (particles[i].y < 0 || particles[i].y > canvas.height) particles[i].vy = -particles[i].vy;

                particles[i].draw();

                // Only draw lines for devops theme
                if (theme === 'devops') {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < 150) {
                            ctx.beginPath();
                            const opacity = 1 - (dist / 150);
                            ctx.strokeStyle = `${currentColors.line} ${opacity * 0.5})`;
                            ctx.lineWidth = 1;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Restart on theme change

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
                pointerEvents: 'none',
                opacity: theme === 'devops' ? 0.7 : 0.4 // Lower opacity for light theme readability
            }}
        />
    );
};

export default NetworkBg;
