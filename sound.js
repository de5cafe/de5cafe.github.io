<script>

    const audio = document.getElementById('sound');

    // Get the button element (you can choose any button)
    const ba = document.getElementById('btn1');

    // Add click event listener to the button
    ba.addEventListener('click', function() {
        audio.currentTime = 0; // Reset audio to the start
        audio.play(); // Play the sound
    });
</script>
