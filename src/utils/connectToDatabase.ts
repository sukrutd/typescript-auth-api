import mongoose from 'mongoose';
import config from 'config';

async function connectToDatabase() {
  const databaseURI = config.get<string>('databaseURI');
  try {
    await mongoose.connect(databaseURI);
  } catch (error) {
    process.exit(1);
  }
}

export default connectToDatabase;
