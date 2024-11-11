// ==UserScript==
// @name         自动填写课程评估表单
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动完成课程评估表单的填写
// @match        https://xkcts.ucas.ac.cn:8443/evaluate/evaluateCourse/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 自动选择最高分选项
    const highestScoreRadioButtons = document.querySelectorAll('input[type="radio"][value="5"]');
    highestScoreRadioButtons.forEach(button => {
        button.checked = true;
    });

    // 填写主观题默认内容
    document.querySelector('textarea[name="item_1355"]').value = "课程内容丰富，讲解清晰，受益匪浅。";
    document.querySelector('textarea[name="item_1356"]').value = "希望增加更多实践内容，以帮助更好地理解课程知识。";
    document.querySelector('textarea[name="item_1357"]').value = "我平均每周完成本课程大约2小时。";
    document.querySelector('textarea[name="item_1358"]').value = "非常感兴趣，但对本课程了解比较有限。";
    document.querySelector('textarea[name="item_1359"]').value = "比较积极，大部分课都会参与，上课回答问题较为积极，课堂气氛良好。";

    // 自动选择单选和多选题的默认选项（此处假设第一个选项）
    document.querySelector('input[name="radio_1360"][id="1361"]').checked = true;
    document.querySelector('input[name="item_1366"][id="1367"]').checked = true;
    document.querySelector('input[name="item_1366"][id="1368"]').checked = true;

})();
