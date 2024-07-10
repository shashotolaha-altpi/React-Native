import Sequelize from 'rn-sequelize';
import SQLite from 'react-native-sqlite-storage';

// Import polyfill to ensure compatibility
import 'react-native-url-polyfill/auto';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

function customLogger(query, options) {
  if (options.queryType === 'query') {
    console.log(`Custom log Executing query: ${query}`);
  }
}

export const connection = new Sequelize({
  dialectModule: SQLite,
  dialect: 'sqlite',
  database: 'RVTutorials.db',
  logging: customLogger,
  dialectOptions: {
    version: '1.0',
    description: 'Test DB',
  },
});
const connectionCheck = async () => {
  await connection
    .authenticate()
    .then(() => {
      console.log('connected');
    })
    .catch(err => {
      console.error('connection error', err);
    });
};

export const initDB = async () => {
  try {
    await connection.sync();
    await connectionCheck();
    // await division.sync({force: true});
    // await synctable();
    console.log('Database synchronized!');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
};
