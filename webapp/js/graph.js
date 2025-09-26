function drawAreaGraph() {
    const canvas = document.getElementById('areaGraph');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 50;
    const tickLength = 8;
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(centerX - scale * 4, centerY);
    ctx.lineTo(centerX + scale * 4, centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - scale * 4);
    ctx.lineTo(centerX, centerY + scale * 4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX + scale * 4 - 8, centerY - 5);
    ctx.lineTo(centerX + scale * 4, centerY);
    ctx.lineTo(centerX + scale * 4 - 8, centerY + 5);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(centerX - 5, centerY - scale * 4 + 8);
    ctx.lineTo(centerX, centerY - scale * 4);
    ctx.lineTo(centerX + 5, centerY - scale * 4 + 8);
    ctx.fill();

    ctx.font = '14px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('X', centerX + scale * 4 + 10, centerY - 10);
    ctx.fillText('Y', centerX + 10, centerY - scale * 4 - 10);

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.font = '12px Arial';

    for (let i = -4; i <= 4; i++) {
        const x = centerX + i * scale;
        ctx.beginPath();
        ctx.moveTo(x, centerY - tickLength);
        ctx.lineTo(x, centerY + tickLength);
        ctx.stroke();

        if (i === -4) ctx.fillText('-R', x - 12, centerY + 20);
        if (i === -2) ctx.fillText('-R/2', x - 12, centerY + 20);
        if (i === 2)  ctx.fillText('R/2', x - 12, centerY + 20);
        if (i === 4)  ctx.fillText('R', x - 6, centerY + 20);
    }

    for (let i = -4; i <= 4; i++) {
        const y = centerY - i * scale;
        ctx.beginPath();
        ctx.moveTo(centerX - tickLength, y);
        ctx.lineTo(centerX + tickLength, y);
        ctx.stroke();

        if (i === -4) ctx.fillText('-R', centerX + 15, y + 4);
        if (i === -2) ctx.fillText('-R/2', centerX + 15, y + 4);
        if (i === 2)  ctx.fillText('R/2', centerX + 15, y + 4);
        if (i === 4)  ctx.fillText('R', centerX + 15, y + 4);
    }

    ctx.fillStyle = 'rgba(0, 123, 255, 0.3)';

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, scale * 4, Math.PI * 0.5, Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.fillRect(
        centerX,
        centerY - scale * 4,
        scale * 2,
        scale * 4
    );

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + scale * 2, centerY);
    ctx.lineTo(centerX, centerY + scale * 2);
    ctx.closePath();
    ctx.fill();
}


document.addEventListener('DOMContentLoaded', function() {
    drawAreaGraph();
});