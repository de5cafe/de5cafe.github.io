document.getElementById('btn4').addEventListener('click', function() {
    const enemyhealth = document.getElementById('ehealth');
    
    // Ensure the value is a valid number
    let currentValue = parseInt(enemyhealth.value, 10);
    
    // Check if currentValue is NaN, if so, set it to 0
    if (isNaN(currentValue)) {
        currentValue = 0;
    }
    
    // Reduce the value by 5, ensuring it doesn't go below 0
    currentValue = Math.max(0, currentValue - 5);
    
    // Update the progress bar value
    enemyhealth.value = currentValue;
});
