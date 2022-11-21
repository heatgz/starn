import type {ArrayMessage} from '../types/array-message';
import type {Message} from '../types/message';

export class MakeMessage {
	makeMessage(topic: string, message: Message | ArrayMessage): string {
		return JSON.stringify({
			topic,
			messageSendindType: 'Send Message',
			time: Date.now(),
			message,
		}).concat('\n');
	}
}
