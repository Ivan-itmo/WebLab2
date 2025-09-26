document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('areaGraph');
    canvas.addEventListener('click', function(e) {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        const graphX = ((clickX / canvas.width) * 10) - 5;
        const graphY = 5 - ((clickY / canvas.height) * 10);
        const x = Math.round(graphX * 100) / 100;
        const y = Math.round(graphY * 100) / 100;
        const r = document.querySelector('input[name="r"]:checked')?.value;

        if (!r) {
            const errorDiv = document.getElementById('errorMessage');
            if (errorDiv) {
                errorDiv.textContent = "Выберите радиус R!";
                errorDiv.style.display = 'block';
            }
            return;
        }

        const errorDiv = document.getElementById('errorMessage');
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }
        window.location.href = `?x=${x}&y=${y}&r=${r}`;
    });
});