import * as fs from 'fs'
import path from "path";
import { Configuration, OpenAIApi } from "openai";
import * as prompting from "./lib/prompting.js"
import { loadPDFContext } from "./lib/parsePDF.js"

async function main() {

    const role = "user"

    /**Preprocessing */
    // Signing the Agreements
    const signingRes = await prompting.promptSigning()
    if (signingRes.includes(false))
        throw Error("You need to sign all agreements to use the AllPaGPT.")

    // Input your ChatGPT API Key
    const OPENAI_API_KEY = await prompting.promptAPIKey()
    if (!OPENAI_API_KEY)
        throw Error("You need to input your API Key to use the AllPaGPT.")

    // Choose your source pdf
    const pdfPath = await prompting.promptPDFPath()
    const pdfText = await loadPDFContext(pdfPath)
    if (!pdfText)
        throw Error("You file is invalid.")

    // Choose the output language
    const language = await prompting.promptLanguage()
    if (!language)
        throw Error("You language is invalid.")

    // Choose the content length
    const length = await prompting.promptWordsLength()
    if (!length)
        throw Error("You length is invalid.")

    // Give your target problems
    let problemsArray = []
    let nowProblem = ""
    while (nowProblem != `_end_`) {
        nowProblem = await prompting.promptProblems()
        if (nowProblem != `_end_`)
            problemsArray.push(nowProblem)
    }

    // Give the output file nane
    const outputName = await prompting.promptOutput()

    /**Initialization */
    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const content = `
        I would like you to write a reflection using approximately ${length - 500} to ${length} words in ${language}. 
        You should be a student around 25 years old with higher education. 
        You must raise valuable questions and express your thoughts on them in your reflection.
        ${problemsArray.length !== 0 ? "Besides, your reflection must also have the following questions:" : ""}
        ${problemsArray.length !== 0 ? problemsArray.map((e, i) => (i + 1 + ". " + e)).join('\n') : ""} 
        Here is the contents, please read it and write the reflection with above instructions: 
        \n "${pdfText}"`
    console.log(content)

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: role, content: content
        }],
    });

    // Produce the result
    const response = completion.data.choices[0].message
    // console.log(completion)
    console.log(response);

    // Save the final result
    fs.writeFileSync(`./output/${outputName}.txt`, response.content);

    // Count the text length
    console.log("Word Count: ", response.content.replace(/[^\x00-\xff]/g, "xx").length)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })