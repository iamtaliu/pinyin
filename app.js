'use strict'
let pinyin = require("./pinyin");
let tmpl =` 企业基本信息: { 
        机构名称: {type: String},  
        大专人数比例: {type: String},  
        大专人数 (股份有限公司和有限责任公司): {type: Date},  
        }
`;

let  t = new Date();
console.log(pinyin.convert(tmpl));    
console.log("time:",new Date()-t,"ms");
