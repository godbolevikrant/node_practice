const sumRequestHandler = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const parsedBody = new URLSearchParams(body);
        const num1 = parseFloat(parsedBody.get('num1'));
        const num2 = parseFloat(parsedBody.get('num2'));

        const sum = num1 + num2;

        res.write(`
            <html>
                <head><title>Result</title></head>
                <body>
                    <h1>The sum of ${num1} and ${num2} is ${sum}</h1>
                    <a href="/calculate">Calculate Again</a>
                </body>
            </html>
        `);
        console.log(`sum is ${sum}`);
        res.end();
    });
};

module.exports = sumRequestHandler;
