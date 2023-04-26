import prompts from "prompts"

export async function promptSigning() {
    const response = await prompts([
        {
            type: 'confirm',
            name: 'sign1',
            message: '1. 我知道 ChatGPT 的服務有可能提供錯誤或過時資訊，我保證會自行勘誤並且對其提供的結果斟酌使用',
            initial: false
        },
        {
            type: 'confirm',
            name: 'sign2',
            message: '2. 我知道使用這個服務，在某些國家、地區、機構、學院等任何時地情況下都有可能違反相關法律、命令、規則、約定，我保證會自行確認在一切合規的情況下使用，且負擔一切責任',
            initial: false
        },
        {
            type: 'confirm',
            name: 'sign3',
            message: '3. 我知道這個服務並不會收取我的任何費用，我使用的是自己的 API Key 的額度',
            initial: false
        }])
    return [response.sign1, response.sign2, response.sign3]
}

export async function promptAPIKey() {
    const response = await prompts({
        type: 'text',
        name: 'apiKey',
        message: `What's your ChatGPT API Key`
    })
    return response.apiKey
}

export async function promptPDFPath() {
    const response = await prompts({
        type: 'text',
        name: 'pdfPath',
        message: `Where is your PDF location(e.g. "C:\\Users\\Bob\\Downloads\\Bob_HW1.pdf")`,
        initial: "./input/Smart_Contract_Attacks_and_Protections.pdf"
    })
    return response.pdfPath
}

export async function promptLanguage() {
    const response = await prompts(
        {
            type: 'select',
            name: 'language',
            message: 'Select your output language',
            choices: [
                { title: '繁體中文', value: 'Traditional Chinese' },
                { title: '简体中文', value: 'Simplified Chinese' },
                { title: 'English', value: 'English' },
                { title: 'にほんご', value: 'Japanese' },
                { title: '한국어', value: 'Korean' },
            ],
            initial: 0
        })
    return response.language
}

export async function promptWordsLength() {
    const response = await prompts(
        {
            type: 'select',
            name: 'length',
            message: 'Select the content length(every 500 words as a interval)',
            choices: [
                { title: '0 ~ 500', value: '500' },
                { title: '500 ~ 1000', value: '1000' },
                { title: '1000 ~ 1500', value: '1500' },
                { title: '1500 ~ 2000', value: '2000' },
                { title: '2000 ~ 2500', value: '2500' },
                { title: '2500 ~ 3000', value: '3000' },
                { title: '3000 ~ 3500', value: '3500' },
                { title: '3500 ~ 4000', value: '4000' }
            ],
            initial: 1
        })
    return response.length
}

export async function promptProblems() {
    const response = await prompts({
        type: 'text',
        name: 'problems',
        message: `Give your target problems (e.g. What is the most interesting perspective in this article?), you can give lots of problems.\nIf you don't need to give more, you can enter "_end_"`,
        initial: "_end_"
    })
    return response.problems
}

export async function promptOutput() {
    const response = await prompts({
        type: 'text',
        name: 'output',
        message: `Give your output file name`,
        initial: "output"
    })
    return response.output
}