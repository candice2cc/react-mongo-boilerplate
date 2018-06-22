/**
 * @author Candice
 * @date 2018/6/21 20:24
 */
import mongoConn from '../common/mongo/mongoConn';
import HelloSchema from '../schemas/HelloSchema';

const HelloModel = mongoConn.model('Hello', HelloSchema, 'hello');
export default HelloModel;
