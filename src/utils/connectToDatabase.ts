import config from 'config';
import mongoose from 'mongoose';
import log from './logger';

async function connectToDatabase() {
  const databaseURI = config.get<string>('databaseURI');
  try {
    await mongoose.connect(databaseURI);
    log.info('Connected to Database.');
  } catch (error) {
    process.exit(1);
  }
}

export default connectToDatabase;
