import THBText from "thai-baht-text"
import INFINITY from "../const/primitive/INFINITY"
export default (money) => money === Number.MAX_VALUE ? `${INFINITY}` : THBText(money);