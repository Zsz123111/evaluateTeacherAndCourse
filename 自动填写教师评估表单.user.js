// ==UserScript==
// @name         自动填写教师评估表单
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动完成教师评估表单的填写
// @match        https://xkcts.ucas.ac.cn:8443/evaluate/evaluateTeacher/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 自动选择客观题的最高分
    const highScoreRadioButtons = document.querySelectorAll('input[type="radio"][value="5"]');
    highScoreRadioButtons.forEach(button => {
        button.checked = true;
    });

    // 填写主观题的默认答案
    // 这里的item_****可能会有变化，导致文字部分无法自动填写，具体操作就是在浏览器中
    // 鼠标右键，点击检查，查看开发者模式下网页源码对应部分的item代码，然后对应文字框修改为对应编码即可
    document.querySelector('textarea[name="item_1431"]').value = "老师教学内容贯通、严谨、科学，学习气氛活跃。";
    document.querySelector('textarea[name="item_1432"]').value = "希望增加课后作业环节，进一步巩固学习内容。";

    // 检查并填写验证码（请手动输入验证码）
    document.querySelector('input[name="adminValidateCode"]').focus();

})();
