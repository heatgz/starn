import {Sender} from '../index';
import {ClientStarn} from '../index';

describe('is it possible to create a new client', () => {
	let sender: Sender;
	let client: ClientStarn;

	beforeAll(() => {
		sender = new Sender({
			port: 2020,
			host: 'localhost',
			typeMessage: 'string',
		});

		client = new ClientStarn({port: 2020, host: 'localhost'});

		sender.sendMessage('A', 'Hello A');
		sender.sendMessage('B', 'Hello B');
		sender.sendMessage('C', 'Hello C');
	});

	it('validate if client properties exist', () => {
		expect(client).toHaveProperty('connection');
	});

	it('validate if data of topics were sending', () => {
		client.getMessage('A', (data, time, topic) => {
			expect(data).toBe('Hello A');
			expect(topic).toBe('A');
		});

		client.getMessage('B', (data, time, topic) => {
			expect(data).toBe('Hello B');
			expect(topic).toBe('B');
		});

		client.getMessage('C', (data, time, topic) => {
			expect(data).toBe('Hello C');
			expect(topic).toBe('C');
		});
	});
});
