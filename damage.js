document.getElementById('btn4').addEventListener('click', function() {
    const enemyhealth = document.getElementById('ehealth');
    let currentValue = parseInt(enemyhealth.value, 100);
    
    // Reduce the value by 5, ensuring it doesn't go below 0
    currentValue = Math.max(0, currentValue - 5);
    
    // Update the progress bar value
    enemyhealth.value = currentValue;
});
