import logger from 'pino';
import dayjs from 'dayjs';
import config from 'config';

const level = config.get<string>('logLevel');

const log = logger({
  level,
  transport: { target: 'pino-pretty' },
  base: { pid: false },
  timestamp: () => `,"Time":"${dayjs().format('MMM DD, YYYY hh:mm:ss A')}"`
});

export default log;
