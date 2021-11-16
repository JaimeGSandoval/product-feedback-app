import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
// import imageminJpegtran from 'imagemin-jpegtran';

// 'og-img-formats/*.{jpg,png}'
imagemin(['hero-blackcup.webp'], {
  destination: 'images',
  plugins: [imageminWebp()],
}).then(() => {
  console.log('Images optimized');
});
