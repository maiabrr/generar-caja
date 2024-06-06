import React, { useState } from 'react';

const ColorBoxApp = () => {
    const [color, setColor] = useState('');
    const [size, setSize] = useState(100); // Tamaño predeterminado de 100x100
    const [boxes, setBoxes] = useState([]);

    const handleColorChange = (e) => setColor(e.target.value);
    const handleSizeChange = (e) => setSize(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (color && size) {
        const newBox = { color, size: parseInt(size, 10) };
        setBoxes([...boxes, newBox]);
        setColor('');
        setSize(100); // Restablecer el tamaño predeterminado
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
            Color:
            <input
                type="text"
                value={color}
                onChange={handleColorChange}
                placeholder="Enter a color"
                required
            />
            </label>
            <label>
            Size:
            <input
                type="number"
                value={size}
                onChange={handleSizeChange}
                placeholder="Enter size (px)"
                required
            />
            </label>
            <button type="submit">Add</button>
        </form>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
            {boxes.map((box, index) => (
            <div
                key={index}
                style={{
                backgroundColor: box.color,
                width: `${box.size}px`,
                height: `${box.size}px`,
                margin: '10px'
                }}
            ></div>
            ))}
        </div>
        </div>
    );
    };

    export default ColorBoxApp;
