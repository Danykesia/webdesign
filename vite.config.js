import { resolve } from 'path';

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mainPt: resolve(__dirname, 'pt/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        aboutPt: resolve(__dirname, 'sobre/index.html'),
        work: resolve(__dirname, 'work/index.html'),
        workPt: resolve(__dirname, 'trabalhos/index.html'),
      }
    }
  }
}
