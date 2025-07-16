

export default function getCroppedImg(imageSrc: string, pixelCrop: any): Promise<string> { // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous'; // important pour éviter les problèmes CORS avec des blobs

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return reject('Contexte canvas introuvable');

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      canvas.toBlob((blob) => {
        if (!blob) {
          return reject('Erreur de conversion en Blob');
        }
        const croppedUrl = URL.createObjectURL(blob);
        resolve(croppedUrl);
      }, 'image/jpeg');
    };

    image.onerror = () => reject('Impossible de charger l’image');
    image.src = imageSrc;
  });
}
