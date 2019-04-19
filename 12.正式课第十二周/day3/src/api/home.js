// 首页发的请求
import {get} from "./index.js";
export function getSliders() {
    return get("/getSliders")
}
export function getLessons(category,offset,limit) {
    return get(`/getLessons/${category}?offset=${offset}&limit=${limit}`);
}