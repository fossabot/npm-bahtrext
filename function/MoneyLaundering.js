import removeLeadingingZeros from '../snippet/removeLeadingingZeros.js';
import BulkReplace from './BulkReplace.js';

export default (money) => {
  return removeLeadingingZeros(BulkReplace(money, "", /[,\s_]/g));
};
