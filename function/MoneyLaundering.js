import removeLeadingZeros from '../snippet/removeLeadingZeros';
import BulkReplace from '../snippet/BulkReplace';

export default (money) => {
  return removeLeadingZeros(BulkReplace(money, "", /[,\s_]/g));
};
