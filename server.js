require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/api/run', (req, res) => {
    const inputData = req.body;

    // Validate input
    if (!inputData || typeof inputData !== 'object') {
        return res.status(400).send({ error: 'Invalid input data' });
    }

    // Check if all values are numerical
    for (const key in inputData) {
        if (typeof inputData[key] !== 'number') {
            return res.status(400).send({ error: 'All input values must be numerical' });
        }
    }

    console.log('Input data:', inputData);

    // Create a new Python process
    const pythonProcess = spawn('python', ['script.py']);

    // Send the input data to the Python script
    pythonProcess.stdin.write(JSON.stringify(inputData));
    pythonProcess.stdin.end();

    let scriptOutput = '';
    // Capture the output from the Python script
    pythonProcess.stdout.on('data', (data) => {
        scriptOutput += data.toString();
    });

    // If the Python script gives an error, log the error
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python script error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).send('Python script failed');
        }
        res.send(scriptOutput);
    })

});


app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
})