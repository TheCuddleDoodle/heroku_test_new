const { create, Client } = require('@open-wa/wa-automate');
const ud = require('urban-dictionary')

function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Hi') {
		await client.sendText(message.from, "Hello World");
    	}
  });
}

create().then(start);
