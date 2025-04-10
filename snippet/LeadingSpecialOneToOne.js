import { ONE } from '../const/index.js';

export default (money) => money.replace(/^เอ็ด(?=(ล้าน)+)/, ONE)
