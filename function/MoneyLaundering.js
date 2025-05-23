import removeLeadingingZeros from '../snippet/removeLeadingingZeros';
import BulkReplace from '../snippet/BulkReplace';

export default (money) => {
  return removeLeadingingZeros(BulkReplace(money, "", /[,\s_]/g));
};
