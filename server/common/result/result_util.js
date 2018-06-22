/**
 * Created by candice on 17/1/25.
 */

import CommonResult from './CommonResult';
import CommonPageResult from './CommonPageResult';

function buildSuccessResult(resultCode) {
  let commonResult = new CommonResult();
  commonResult.success = true;
  commonResult.resultCode = resultCode;
  return commonResult;
}

function buildErrorResult(resultCode) {
  let commonResult = new CommonResult();
  commonResult.success = false;
  commonResult.resultCode = resultCode;
  return commonResult;
}

function buildSuccessPageResult(resultCode) {
  let commonPageResult = new CommonPageResult();
  commonPageResult.success = true;
  commonPageResult.resultCode = resultCode;
  return commonPageResult;
}

function buildErrorPageResult(resultCode) {
  let commonPageResult = new CommonPageResult();
  commonPageResult.success = false;
  commonPageResult.resultCode = resultCode;
  return commonPageResult;
}

export { buildSuccessResult, buildErrorResult, buildSuccessPageResult, buildErrorPageResult };
