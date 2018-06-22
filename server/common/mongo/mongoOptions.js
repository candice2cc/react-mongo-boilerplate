/**
 * @author Candice
 * @date 2018/6/21 15:16
 */
import { isProdConfig } from '../helpers/env_helper';

const mongoOptions = () => {
  if (isProdConfig()) {
    return {
      connectionString:
        'mongodb://dbname:mongodb.com:3717,mongodb2.com:3717/react-mongo-boilerplate', // TODO
      options: {
        authSource: 'react-mongo-boilerplate',
        replicaSet: 'mgset-123',
        keepAlive: 1
      }
    };
  }
  return {
    connectionString: 'mongodb://192.168.1.1:27020/react-mongo-boilerplate',
    options: {
      keepAlive: 1
    }
  };
};

export default mongoOptions();
