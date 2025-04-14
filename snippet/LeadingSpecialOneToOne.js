import { ONE } from '../const/.';

export default (money) => money.replace(/^เอ็ด(?=(ล้าน)+)/, ONE)
