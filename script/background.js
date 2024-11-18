  const bgs = [
        '/assets/bg1.png', // Replace with your actual image paths
        '/assets/bg2.png',
        '/assets/bg3.png',
        '/assets/bg4.png'
    ];

 const aleatorio = Math.floor(Math.random() * bgs.length);
        // Set the background image of the body using template literals
        document.body.style.backgroundImage = `url('${bgs[aleatorio]}')`;
