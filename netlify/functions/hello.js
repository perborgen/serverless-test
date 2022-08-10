// hello there!
// 
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that. 
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.



const accountSid = 'AC4612f46561a10f597a22d3f9ddae7aa9';
const authToken = '2c6dc18c5f5ad37f94711e13ecc31ef9';
const client = require('twilio')(accountSid, authToken);


exports.handler = async event => {

    client.messages
    .create({
        body: 'This is my first node generated SMS!',
        from: '+1 218 392 4714',
        to: '+4797655557' // MUST BE A REGISTERED NUMBER, IE, YOUR OWN
    })
    .then(message => console.log(message.sid))
    .catch(error => console.log("error", error))

    const subject = event.queryStringParameters.name || 'World'
    return {
        statusCode: 200,
        body: `Hello ${subject}!`,
    }
}

