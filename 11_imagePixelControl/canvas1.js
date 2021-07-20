(() => {
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 450;

    const image1 = new Image();
    image1.src = "image1.jpg";
    image1.addEventListener("load", () => {
        context.drawImage(image1, 0, 0, canvas.width, canvas.height);
        const scannedImage = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );
        const scannedData = scannedImage.data;
        for (let i = 0; i < scannedData.length; i += 4) {
            const averageColorValue =
                (scannedData[i] + scannedData[i + 1] + scannedData[i + 2]) / 3;
            scannedData[i] = averageColorValue;
            scannedData[i + 1] = averageColorValue;
            scannedData[i + 2] = averageColorValue;
        }
        scannedImage.data = scannedData;
        context.putImageData(scannedImage, 0, 0);
    });
})();
