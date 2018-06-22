/**
 * Created by candice on 2017/7/22.
 */

/* eslint-disable no-restricted-globals */

import { buildErrorResult, CommonStatus } from '../common/result';

const pageMiddleware = (req, res, next) => {
  let pageInfo = {};
  if (typeof req.query.pageNum !== 'undefined') {
    let pageNum = Number(req.query.pageNum);
    if (!isNaN(pageNum)) {
      pageInfo.pageNum = req.query.pageNum;
    } else {
      req.errorResult = buildErrorResult(CommonStatus.ILLEGAL_PARAMETERS);
      return next();
    }
  }
  if (typeof req.query.pageSize !== 'undefined') {
    let pageSize = Number(req.query.pageSize);
    if (!isNaN(pageSize)) {
      pageInfo.pageSize = req.query.pageSize;
    } else {
      req.errorResult = buildErrorResult(CommonStatus.ILLEGAL_PARAMETERS);
      return next();
    }
  }
  console.log(pageInfo);
  req.pageInfo = pageInfo;
  return next();
};
export default pageMiddleware;
