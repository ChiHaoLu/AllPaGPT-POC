# AllPaGPT

> Author: [ChiHaoLu](https://chihaolu.me)([chihaolu.eth](https://chihaolu.eth.xyz))

1. 你可以考慮 donate ETH 給我，或者按一個星星
1. 我知道每一段接起來會很奇怪，但你有眼睛也有手，所以你可以解決
1. 如果覺得難用就不要用，你可以發一個 issue 跟我建議程式碼怎麼改，或者直接 fork 寫更好的，但不接受跟我蝦逼逼說哪裡很怪
1. 如果照著文件走你跑不起來（如果你是一個完全不會寫程式的人）或卡在某些地方，可以寄信給我: `qazwsxeric@gmail.com`

## Warning!!!

### 繁體中文
***使用此服務代表你熟知以下事項：***
1. 我知道 ChatGPT 的服務有可能提供錯誤或過時資訊，我保證會自行勘誤並且對其提供的結果斟酌使用
1. 我知道使用這個服務，在某些國家、地區、機構、學院等任何時地情況下都有可能違反相關法律、命令、規則、約定，我保證會自行確認在一切合規的情況下使用，且負擔一切責任
1. 我知道這個服務並不會收取我的任何費用，我使用的是自己的 API Key 的額度

### English
***By using this service, you acknowledge the following:***
1. I understand that ChatGPT's service may provide inaccurate or outdated information, and I will verify and use the results provided at my own discretion.
1. I understand that using this service may violate relevant laws, orders, rules, or agreements in certain countries, regions, organizations, colleges, or any other circumstances. I will ensure that I use the service in compliance with all regulations and assume all responsibility.
1. I understand that this service will not charge me any fees, and I am using my own API Key quota.

## How to Use AllPaGPT

### 1. Preparing
1. 進入[OpenAI 網站](https://platform.openai.com/account/api-keys)，進行 **Log In**
1. 選擇你的登入方式，跟使用 [ChatGPT](https://chat.openai.com/chat) 的登入過程一模一樣
1. 點選 `Create new secret key`
1. 輸入這把 Key 的名稱（任意），然後點選 `Create new secret key`
1. **複製並妥善保存**你的 **API Key**

### 2. Download AllPaGPT-POC
1. Preparing `node.js>=15`, you can download it in the [Official Website](https://nodejs.org/zh-tw/download).
2. Clone or Download the zip of the [AllPaGPT-POC](https://github.com/ChiHaoLu/AllPaGPT-POC) repository.
3. Use the command-line or terminal to trigger the AllPaGPT-POC.
4. Arrive the AllPaGPT-POC folder.
```
$ cd AllPaGPT-POC
```
5. Initialization:
```
$ npm install # or yarn install
```

### Begin your journey

1. Run the AllPaGPT-POC:
```
$ node index.js
```
2. Signing the Agreements:
```
√ 1. 我知道 ChatGPT 的服務有可能提供錯誤或過時資訊，我保證會自行勘誤並且對其提供的結果斟酌使用 ... yes
√ 2. 我知道使用這個服務，在某些國家、地區、機構、學院等任何時地情況下都有可能違反相關法律、命令、規則、約定，我保證會自行確認在 一切合規的情況下使用，且負擔一切責任 ... yes
√ 3. 我知道這個服務並不會收取我的任何費用，我使用的是自己的 API Key 的額度 ... yes
```
3. Input your ChatGPT API Key(which you copy from [here](#1-preparing))
```
√ What's your ChatGPT API Key ... asdfasdfasdfasefagevdvasdvasdfasdf
```
4. Give the absolute path to the target pdf:
```
√ Where is your PDF location(e.g. "C:\Users\Bob\Downloads\Bob_HW1.pdf") ... C:\Users\Bob\Downloads\Bob_HW1.pdf
```
5. Choose the **output** language:
```
√ Select your output language » 繁體中文
```
6. Choose the content length(every 500 words as a interval):
```
√ Select the content length(every 500 words as a interval) » 500 ~ 1000
```
7. Give your target problems:
```
√ Give your target problems (e.g. What is the most interesting perspective in this article?), you can give lots of problems. 
If you don't need to give more, you can enter "_end_" ... _end_
```
8. Give the output file nane:
```
√ Give your output file name ... Bob_hw1
```
9. Produce the result, you can find the output file(`.txt`) in the `output` folder.

---

## Appendix

### Helpful Info.
1. 你可以在這裡看見你的[使用額度](https://platform.openai.com/account/usage)

### Future Features Workflow
- ✅ 簽署同意協定
- ✅ 登入 + 輸入個人 API Key
- 選擇來源
    - ✅ 讀取 PDF（包含論文、期刊、報告、簡報）
    - ⛔ 讀取 Youtube 影片（僅會將音源轉成文字，無法讀取影像內容）
- ✅ 選擇語言
- ✅ 選擇字數（每 500 字為區間）
- ✅ 字數統計
- ✅ 選擇問題或輸入問題，得到相對應的內容
- ⛔ 訓練常用口語：讀取個人過往報告或文章得到常用口語
- ⛔ 自動將上述問題梳理成流暢文字形成文章
- ⛔ 文法修正器（只支援英文與中文）
- 評分系統
    - ⛔ AI 生產程度
    - ⛔ 內容品質分數
- ⛔ 顯示額度並且計算消耗額度
- ⛔ 前端介面

### License

[MIT](./LICENSE)

### Reference

- [OpenAI - Documentation](https://platform.openai.com/docs/api-reference/chat)
- [【js文件系列三】JS如何提取Pdf 中的图片和文字](https://www.haorooms.com/post/js_pdfjs_imagetext)