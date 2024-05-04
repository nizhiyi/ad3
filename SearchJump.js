// ==UserScript==
// @name         搜索引擎切换器
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match https://www.bing.com/search?*
// @match https://cn.bing.com/search?*
// @match https://www.baidu.com/s?*
// @match https://m.baidu.com/s?*
// @match https://www.baidu.com/from=*
// @match https://m.baidu.com/from=*
// @match https://www.baidu.com/ssid=0/from=*
// @match https://m.baidu.com/ssid=0/from=*
// @match https://m.sogou.com/web/searchList*
// @run-at       document-start
// @license      MIT
// ==/UserScript==
 
// 搜索网址配置
const urlMapping = [
  {
    name: "Bing",
    searchUrl: "https://cn.bing.com/search?q=",
    keyName: "q",
    testUrl: ".bing.com/search?q=",
  },
  {
    name: "百度",
    searchUrl: "https://www.baidu.com/s?word=",
    keyName: "word",
    testUrl: ".baidu.com/s?word=",
  },
  {
    name: "搜狗",
    searchUrl: "https://m.sogou.com/web/searchList.jsp?keyword=",
    keyName: "keyword",
    testUrl: ".sogou.com/web/searchList",
  },
  {
    name: "百度（隐藏）",
    searchUrl: "https://www.baidu.com/s?word=",
    keyName: "word",
    testUrl: ".baidu.com/from=",
  },
{
    name: "百度2（隐藏）",
    searchUrl: "https://www.baidu.com/s?word=",
    keyName: "word",
    testUrl: ".baidu.com/ssid=0/from=",
  },
  {
    name: "百度3（隐藏）",
    searchUrl: "https://www.baidu.com/s?wd=",
    keyName: "wd",
    testUrl: ".baidu.com/s?wd=",
  },
];

// 从url中获取搜索关键词
function getkeywords() {
  let query = new URLSearchParams(location.search);
  for (let item of urlMapping) {
    if (location.href.includes(item.testUrl)) {
    return decodeURIComponent(query.get(item.keyName));}
  }
return null;
};
 
// 主元素
const divlist = document.createElement("div");
divlist.id = "search-app-box";
divlist.style = `
  position: fixed;
  bottom: 0px; 
  right: 0px; 
  width: 50px; 
  height: 110px;
  background-color: hsla(200, 60%, 96%, 0.8); 
  font-size: 14px; 
  border-radius: 8px; 
  z-index: 99999;
`;
document.body.insertAdjacentElement("afterbegin", divlist);

// 列表样式
let liststyle = `
  display: block; 
  color: hsla(211, 60%, 35%, .8) !important;
  padding: 8px; 
  text-align: left;
  line-height: 1.5;
`;

// 设置搜索列表
for (i = 0; i < 3; i++) {
  let itemmap = urlMapping[i];
  let alist = document.createElement("a");
  alist.className = "search-engine-a";
  alist.style = liststyle;
  alist.innerText = itemmap.name;
  alist.addEventListener('click', function () {
    location.replace(itemmap.searchUrl + getkeywords());
    });
  divlist.appendChild(alist);
};
