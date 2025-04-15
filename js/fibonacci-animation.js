document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.fibonacci-container');
    container.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = 600;
    canvas.height = 600;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    let rotation = 0;
    let targetRotation = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse position relative to canvas center
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left - canvas.width / 2;
        mouseY = e.clientY - rect.top - canvas.height / 2;
        
        // Calculate angle between mouse and center
        targetRotation = Math.atan2(mouseY, mouseX);
    });
    
    function drawSpiral() {
        ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        
        // Smoothly interpolate current rotation towards target
        rotation += (targetRotation - rotation) * 0.1;
        
        ctx.save();
        ctx.rotate(rotation);
        
        // Draw spiral
        ctx.beginPath();
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 3;
        
        const spacing = 10;
        const maxRadius = 250;
        
        for (let angle = 0; angle < 8 * Math.PI; angle += 0.1) {
            const radius = spacing * angle;
            if (radius > maxRadius) break;
            
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            if (angle === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        ctx.stroke();
        
        // Draw some dots along the spiral for visual interest
        for (let angle = 0; angle < 8 * Math.PI; angle += 0.5) {
            const radius = spacing * angle;
            if (radius > maxRadius) break;
            
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            ctx.beginPath();
            ctx.fillStyle = '#FFFFFF';
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        ctx.restore();
        
        requestAnimationFrame(drawSpiral);
    }
    
    drawSpiral();
});