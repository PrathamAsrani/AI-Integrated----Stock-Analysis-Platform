import React, { useState, useEffect } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios'
import {toast} from 'react-toastify'

const HomePage = () => {
    const [que, setQue] = useState("")
    const [ans, setAns] = useState("")
    async function generateAnswer() {
        try {
            const data = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`, {
                "contents": [{ "parts": [{ "text": `${que}` }] }]
            });
            toast.success(`query succesfully completed`)
            console.log(data?.data?.candidates?.[0].content?.parts?.[0]?.text);
            setAns(data?.data?.candidates?.[0].content?.parts?.[0]?.text)
        } catch (err) {
            toast.error(`query error`)
            console.log(`Error in Fetching data from gemini API --> PLease refer Homepage.jsx, and inspect the generateAnswer() ${err}`)
        }
    }
    return (
        <Layout title={`Homepage`}>
            <input
                type="text"
                value={que}
                onChange={(e) => setQue(e.target.value)}
                placeholder='type your query'
            />

            <button onClick={generateAnswer}>Button</button>
        </Layout>
    )
}

export default HomePage