/**
 * @author Candice
 * @date 2018/6/21 19:46
 */
import express from 'express';
import pageMiddleware from '../middlewares/page_middleware';
import commonStatus from '../common/result/commonStatus';
import { buildSuccessPageResult } from '../common/result';

import HelloModel from '../models/HelloModel';

const router = express.Router();
// eslint-disable-next-line consistent-return
router.get('/', pageMiddleware, (req, res) => {
  if (req.errorResult) {
    return res.json(req.errorResult.toJSON());
  }
  const { pageInfo } = req;
  const result = buildSuccessPageResult(commonStatus.SUCCESS);
  result.pageNum = pageInfo.pageNum || result.pageNum;
  result.pageSize = pageInfo.pageSize || result.pageSize;
  result.totalPage = 10;
  result.totalSize = 100;
  HelloModel.findOne({}).then(data => {
    result.retData = data;
    return res.json(result.toJSON());
  });
});

export default router;
