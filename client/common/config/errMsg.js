const common = {};

const moduleA = {

  errTitle: 'Edit Scene',
  locationIsEmpty: 'At least 1 Location Widget is required for each scene',
};


/**
 * 格式化字符串
 * @param errMsg
 * @param args
 * @returns {*}
 */
export const formatErrMsg = function formatErrMsg(errMsg, ...args) {
  if (args.length === 0) {
    return errMsg;
  }
  return errMsg.replace(/\{(\d+)\}/g, (m, i) => args[i]);
};

export default {
  common,
  moduleA,
};
