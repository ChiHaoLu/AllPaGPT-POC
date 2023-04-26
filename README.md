# AllPaGPT

> Author: [ChiHaoLu](https://chihaolu.me)([chihaolu.eth](https://chihaolu.eth.xyz))

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
1. 複製你的 **API**
1. 進入[**AllPaGPT 網站**](https://all-pa-gpt.vercel.app/)

### 2. Download AllPaGPT-POC
1. Preparing `node.js>=12`, you can download it in the [Official Website]().
2. Clone or Download the zip of the [AllPaGPT-POC](https://github.com/ChiHaoLu/AllPaGPT-POC) repository.
3. Use the command-line or terminal to trigger the AllPaGPT-POC.
4. Arrive the AllPaGPT-POC folder.
```
$ cd AllPaGPT-POC
```
5. Initialization:
```
$ npm install
```

### Begin your journey

1. Run the AllPaGPT-POC:
```
$ node index.js
```
2. Signing the Agreements:
```
√ 1. 我知道 ChatGPT 的服務有可能提供錯誤或過時資訊，我保證會自行勘誤並且對其提供的結果斟酌使用 ... yes
√ 我知道使用這個服務，在某些國家、地區、機構、學院等任何時地情況下都有可能違反相關法律、命令、規則、約定，我保證會自行確認在 一切合規的情況下使用，且負擔一切責任 ... yes
√ 我知道這個服務並不會收取我的任何費用，我使用的是自己的 API Key 的額度 ... yes
```
3. Input your ChatGPT API Key(which you copy from [here](#1-preparing))
```
√ What's your ChatGPT API Key ... asdfasdfasdfasefagevdvasdvasdfasdf
```
4. Choose your source pdf:
```
√ Where is your PDF location(e.g. "C:\Users\Bob\Downloads\Bob_HW1.pdf") ... C:\Users\Bob\Downloads\Bob_HW1.pdf
```
5. Choose the **output** language:
```
√ Select your output language » 繁體中文
```
6. Choose the content length(every 500 words as a interval):
```
√ Select the content length(every 500 words as a interval) » 0 ~ 500
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
9. Produce the result:
```
TBD
```


---

## Appendix

## Future Features Workflow
1. ✅ 簽署同意協定
2. ✅ 登入 + 輸入個人 API Key
3. ⛔ 訓練常用口語：讀取個人過往報告或文章得到常用口語
4. 選擇來源
    - ✅ 讀取 PDF（包含論文、期刊、報告、簡報）
    - ⛔ 讀取 Youtube 影片（僅會將音源轉成文字，無法讀取影像內容）
5. ✅ 選擇語言
6. ✅ 選擇字數（每 500 字為區間）
7. ✅ 選擇問題或輸入問題，得到相對應的內容
8. ✅ 自動將上述問題梳理成流暢文字形成文章
9. ⛔ 文法修正器（只支援英文與中文）
10. 評分系統
    - ⛔ AI 生產程度
    - ⛔ 內容品質分數

### License

[MIT](./LICENSE)

### Reference

- [OpenAI - Documentation](https://platform.openai.com/docs/api-reference/chat)
- [【js文件系列三】JS如何提取Pdf 中的图片和文字](https://www.haorooms.com/post/js_pdfjs_imagetext)