import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Gamepad2, X, RefreshCw } from 'lucide-react';

const SHAPES = {
  I: { shape: [[1, 1, 1, 1]], color: '#00E5FF' }, // Cyber Cyan
  J: { shape: [[1, 0, 0], [1, 1, 1]], color: '#3b82f6' }, // Blue
  L: { shape: [[0, 0, 1], [1, 1, 1]], color: '#f59e0b' }, // Orange
  O: { shape: [[1, 1], [1, 1]], color: '#eab308' }, // Yellow
  S: { shape: [[0, 1, 1], [1, 1, 0]], color: '#10b981' }, // Green
  T: { shape: [[0, 1, 0], [1, 1, 1]], color: '#D500F9' }, // Neon Magenta
  Z: { shape: [[1, 1, 0], [0, 1, 1]], color: '#ef4444' }  // Red
};

const COLS = 10;
const ROWS = 20;

const createEmptyBoard = () => Array.from({ length: ROWS }, () => Array(COLS).fill(null));

const MiniTetris = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [board, setBoard] = useState(createEmptyBoard());
    const [piece, setPiece] = useState(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const gameRef = useRef(null);

    const spawnPiece = useCallback(() => {
        const keys = Object.keys(SHAPES);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const newPiece = SHAPES[randomKey];
        setPiece(newPiece);
        setPos({ x: Math.floor(COLS / 2) - Math.floor(newPiece.shape[0].length / 2), y: 0 });
    }, []);

    const resetGame = () => {
        setBoard(createEmptyBoard());
        setScore(0);
        setGameOver(false);
        spawnPiece();
    };

    useEffect(() => {
        if (isOpen && !piece && !gameOver) {
            spawnPiece();
        }
    }, [isOpen, piece, gameOver, spawnPiece]);

    const checkCollision = (shape, x, y) => {
        for (let r = 0; r < shape.length; r++) {
            for (let c = 0; c < shape[r].length; c++) {
                if (shape[r][c]) {
                    const newX = x + c;
                    const newY = y + r;
                    if (newX < 0 || newX >= COLS || newY >= ROWS || (newY >= 0 && board[newY][newX])) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    const mergePiece = () => {
        const newBoard = board.map(row => [...row]);
        for (let r = 0; r < piece.shape.length; r++) {
            for (let c = 0; c < piece.shape[r].length; c++) {
                if (piece.shape[r][c] && pos.y + r >= 0) {
                    newBoard[pos.y + r][pos.x + c] = piece.color;
                }
            }
        }
        
        let newScore = score;
        const clearedBoard = newBoard.filter(row => row.some(cell => cell === null));
        const linesCleared = ROWS - clearedBoard.length;
        if (linesCleared > 0) {
            newScore += [0, 100, 300, 500, 800][linesCleared];
            while (clearedBoard.length < ROWS) {
                clearedBoard.unshift(Array(COLS).fill(null));
            }
        }
        
        setBoard(clearedBoard);
        setScore(newScore);
        
        if (pos.y <= 0) {
            setGameOver(true);
        } else {
            spawnPiece();
        }
    };

    const moveDown = useCallback(() => {
        if (gameOver || !piece) return;
        if (!checkCollision(piece.shape, pos.x, pos.y + 1)) {
            setPos(prev => ({ ...prev, y: prev.y + 1 }));
        } else {
            mergePiece();
        }
    }, [piece, pos, board, gameOver]); // dependencies

    useEffect(() => {
        if (!isOpen || gameOver || !isFocused) return;
        const interval = setInterval(moveDown, 800);
        return () => clearInterval(interval);
    }, [isOpen, moveDown, gameOver, isFocused]);

    const handleKeyDown = (e) => {
        if (!isOpen || gameOver || !piece || !isFocused) return;
        
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault(); // Prevent page scrolling
        }

        switch (e.key) {
            case 'ArrowLeft':
                if (!checkCollision(piece.shape, pos.x - 1, pos.y)) {
                    setPos(prev => ({ ...prev, x: prev.x - 1 }));
                }
                break;
            case 'ArrowRight':
                if (!checkCollision(piece.shape, pos.x + 1, pos.y)) {
                    setPos(prev => ({ ...prev, x: prev.x + 1 }));
                }
                break;
            case 'ArrowDown':
                moveDown();
                break;
            case 'ArrowUp':
                const rotated = piece.shape[0].map((val, index) => piece.shape.map(row => row[index]).reverse());
                if (!checkCollision(rotated, pos.x, pos.y)) {
                    setPiece(prev => ({ ...prev, shape: rotated }));
                }
                break;
            case ' ':
                // Hard drop
                let ny = pos.y;
                while (!checkCollision(piece.shape, pos.x, ny + 1)) {
                    ny++;
                }
                setPos({ x: pos.x, y: ny });
                break;
            default:
                break;
        }
    };

    // Draw grid layer
    const renderGrid = () => {
        const grid = board.map(row => [...row]);
        if (piece && !gameOver) {
            for (let r = 0; r < piece.shape.length; r++) {
                for (let c = 0; c < piece.shape[r].length; c++) {
                    if (piece.shape[r][c] && pos.y + r >= 0 && pos.y + r < ROWS) {
                        grid[pos.y + r][pos.x + c] = piece.color;
                    }
                }
            }
        }
        
        return grid.map((row, r) => (
            <div key={r} style={{ display: 'flex' }}>
                {row.map((cell, c) => (
                    <div key={`${r}-${c}`} style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: cell || 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: cell ? `0 0 8px ${cell}` : 'none'
                    }} />
                ))}
            </div>
        ));
    };

    if (!isOpen) {
        return (
            <button 
                className="desktop-only-widget"
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    zIndex: 100,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--accent-color)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px var(--accent-glow)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                title="Play Tetris"
            >
                <Gamepad2 size={28} style={{ color: 'var(--accent-color)' }} />
            </button>
        );
    }

    return (
        <div 
            className="desktop-only-widget"
            ref={gameRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 100,
                background: 'rgba(10, 15, 25, 0.95)',
                border: '1px solid var(--accent-color)',
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 10px 40px var(--accent-glow)',
                backdropFilter: 'blur(10px)',
                width: '194px', // 10*16 + padding
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                outline: 'none',
                opacity: isFocused ? 1 : 0.8,
                transition: 'opacity 0.3s'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-muted)' }}>SCORE: {score}</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={resetGame} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                        <RefreshCw size={14} />
                    </button>
                    <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                        <X size={14} />
                    </button>
                </div>
            </div>
            
            <div style={{ background: 'rgba(0,0,0,0.5)', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                {renderGrid()}
            </div>

            {gameOver && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(255, 0, 0, 0.8)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                }}>
                    GAME OVER<br/>
                    <button onClick={resetGame} style={{ marginTop: '8px', background: 'white', color: 'red', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                        RETRY
                    </button>
                </div>
            )}

            {!isFocused && !gameOver && (
                <div style={{ position: 'absolute', top: '50%', textAlign: 'center', color: 'white', background: 'rgba(0,0,0,0.7)', padding: '10px', borderRadius: '8px', fontSize: '12px', width: '80%' }}>
                    Click to Play<br/>
                    <span style={{color: 'var(--accent-color)'}}>(Use Arrow Keys)</span>
                </div>
            )}
        </div>
    );
};

export default MiniTetris;
