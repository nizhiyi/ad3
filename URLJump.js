// ==UserScript==
// @name         链接自动跳转
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       倪同学
// @run-at       document-start
// @match      https://www.coolapk.com/link?url*
// @match        https://link.zhihu.com/?target*
// @match        https://link.csdn.net/?target*
// @match        https://www.jianshu.com/go-wild*
// @match        https://tieba.baidu.com/mo/q/checkurl?url*
// @match        https://docs.qq.com/scenario/link.html*
// @match        https://txc.qq.com/*/link-jump?*
// @match        https://gitee.com/link?target*
// @match        https://www.kdocs.cn/office/link?target*
// @match        https://weibo.cn/sinaurl?*
// @grant        none
// ==/UserScript==

const querys = ['pfurl','url','target','jump','u'];
const params = new URLSearchParams(location.search);
querys.forEach(que => {
    if (params.has(que)){
       const encoded_url = params.get(que);
       let url = decodeURIComponent(encoded_url);
       location.replace(url);}
});
