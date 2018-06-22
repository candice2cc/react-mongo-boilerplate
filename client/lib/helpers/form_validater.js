/**
 * 是否是合法的数值字符串
 * @param str
 * @returns {boolean}
 */
export const isNum = function isNum(str) {
  let num = parseFloat(str);
  return !Number.isNaN(num) && Number.isFinite(num);
};
/**
 * 是否在指定范围
 * @param num
 * @param start
 * @param end
 * @returns {boolean}
 */
export const isRand = function isRand(num, start, end) {
  let num2 = num;
  if (typeof num2 === 'string') {
    num2 = parseFloat(num);
  }
  return num2 >= start && num2 <= end;
};

class FormValidate {
  constructor(formValue) {
    this.errMsg = null;
    this.formValue = formValue;
    this.rules = [];
  }

  validate(key, validateFunc, errMsg) {
    this.rules.push({
      key,
      validateFunc,
      errMsg
    });
  }

  doValidate() {
    this.rules.forEach(rule => {
      if (this.errMsg === null) {
        const { key, validateFunc, errMsg } = rule;
        const value = this.formValue[key];
        if (!validateFunc(value)) {
          this.errMsg = errMsg;
        }
      }
    });
  }
}

export default FormValidate;
