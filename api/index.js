//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = 3001;

const {getAllTemps} = require('./src/controllers/tempControllers.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { // Prueba Poner en force: false para revisión, de forma que se guarden datos en BD. Por default estaba en force: true // alter: true
  server.listen(PORT, async () => {
    await getAllTemps();
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
