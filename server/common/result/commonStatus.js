/**
 * Created by candice on 17/1/24.
 */
import ResultCode from './ResultCode';

/**
 * 定义状态码
 */

const commonStatus = {
  /** 处理成功 */
  SUCCESS: new ResultCode(0, '处理成功', '处理成功'),

  /** 处理失败 */
  REDIRECT_FAIL: new ResultCode('1010', 'redirect server请求失败', '服务器繁忙，请重试'),
  REDIRECT_ERROR: new ResultCode('1011', 'redirect server请求错误', '服务器繁忙，请重试'),

  /** 处理失败 */
  FAIL: new ResultCode('1001', '处理失败', '处理失败'),

  /** 部分处理失败 */
  PART_FAIL: new ResultCode('1002', '部分处理失败', '系统繁忙，请重试。'),

  /** 未知异常 */
  UNKNOWN_ERROR: new ResultCode('1003', '未知异常', '系统繁忙，请重试。'),

  /** 非法参数 */
  ILLEGAL_PARAMETERS: new ResultCode('1004', '非法参数', '抱歉，此服务暂不可用。'),

  /** 系统错误 */
  SYSTEM_ERROR: new ResultCode('1005', '系统错误', '抱歉，此服务暂不可用。'),

  /** 其他原因失败 */
  FAIL_TO_OTHER_REASON: new ResultCode('1006', '其他原因失败', '抱歉，此服务暂不可用。'),

  /** 用户不存在 */
  PASSWORD_TYPE_NOT_EXISTS_ERROR: new ResultCode(
    '1007',
    '用户密码类型查询失败或者密码类型不存在。',
    '用户密码类型查询失败或者密码类型不存在。'
  ),

  /** 数据库原因失败 */
  DB_ERROR: new ResultCode('1008', '数据库相关操作失败', '系统繁忙,请重试'),

  /**
   *
   */
  NO_LOGIN: new ResultCode('1009', '未登录', '未登录')
};
export default commonStatus;
