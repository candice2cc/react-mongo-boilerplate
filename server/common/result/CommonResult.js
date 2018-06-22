/**
 * Created by candice on 17/1/24.
 */
import commonStatus from './commonStatus';

class CommonResult {
  constructor() {
    this.resultCode = commonStatus.SUCCESS;
    this.success = true;
    this.retData = {};
    this.baseData = {}; // 配置信息
  }

  toJSON() {
    return {
      errNum: this.resultCode.errNum,
      errMsg: this.resultCode.errMsg,
      errShowMsg: this.resultCode.errShowMsg,
      retData: this.retData,
      baseData: this.baseData
    };
  }
}

export default CommonResult;
