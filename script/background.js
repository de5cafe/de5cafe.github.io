  const bgs = [
        '/assets/bg1.jpg', // Replace with your actual image paths
        '/assets/bg2.jpg',
        '/assets/bg3.jpg',
        '/assets/bg4.jpg'
    ];

 const aleatorio = Math.floor(Math.random() * bgs.length);
        // Set the background image of the body using template literals
        document.body.style.backgroundImage = `url('${bgs[aleatorio]}')`;
