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
    document.querySelector('textarea[name="item_1403"]').value = "老师教学严谨，课程内容丰富，讲解清晰。";
    document.querySelector('textarea[name="item_1404"]').value = "希望增加课堂讨论环节，进一步激发学习兴趣。";

    // 检查并填写验证码（请手动输入验证码）
    document.querySelector('input[name="adminValidateCode"]').focus();

    // 自动提交表单
    document.querySelector('#sb1').click();

})();
