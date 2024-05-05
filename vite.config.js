import { resolve } from 'path';

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mainPt: resolve(__dirname, 'index-pt.html'),
        about: resolve(__dirname, 'about.html'),
        aboutPt: resolve(__dirname, 'sobre.html'),
        work: resolve(__dirname, 'work.html'),
        workPt: resolve(__dirname, 'trabalhos.html'),
      }
    }
  }
}
