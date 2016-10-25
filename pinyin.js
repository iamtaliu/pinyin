'use strict'
const pinyin = require('pinyin');
const _ = require('lodash');

function getPinyin(str) {
    let arr = pinyin(str, {
        style: pinyin.STYLE_NORMAL, // 设置拼音风格 .STYLE_NORMAL 普通风格，即不带音标。
        heteronym: true,              // 启用多音字模式
        segment: true                 // 启用分词，以解决多音字问题。
    });
    arr = arr.map(m => m[0]);
    str = arr.join(' ');
    str = _.camelCase(str)
    return str;
}

exports.convert = function (temple) {
    let lines = temple.split('\n');
    let outLines = [];
    for (var line of lines) {
        if (line.indexOf(':') == -1) {
            outLines.push(line);
            continue;
        }
        let comment = null;
        let newLine = line.replace(/^[\s\S]*?:/, function (name) {
            comment = _.trim(name.substr(0, name.length - 1));
            name = name.split("(")[0];
            return getPinyin(name) + ":";
        });
        newLine = newLine + " //" + comment;
        outLines.push(newLine);
    }
    return outLines.join("\n");
}


