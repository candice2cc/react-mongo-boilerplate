/**
 * Created by candice on 17/1/24.
 */
import CommonResult from './CommonResult';

class CommonPageResult extends CommonResult {
  constructor() {
    super();
    this.pageSize = 0;
    this.pageNum = 0;
    this.totalSize = 0;
    this.totalPage = 0;
    this.retData = [];
  }

  calcTotalPage() {
    if (this.totalSize > 0) {
      this.totalPage = Math.ceil(this.totalSize / this.pageSize);
    }
  }

  toJSON() {
    let json = super.toJSON();
    json = Object.assign({}, json, {
      pageSize: this.pageSize,
      pageNum: this.pageNum,
      totalSize: this.totalSize,
      totalPage: this.totalPage,
      retData: this.retData,
    });
    return json;
  }
}

export default CommonPageResult;
