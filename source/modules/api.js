import p__axios from 'axios'
//
export default class {
	constructor (token) {
		this.url = 'https://api.vk.com/method/'
		this.params = {
			v: 5.73,
			access_token: token,
		}
	}
	request = async (
		method = '',
		params = {},
	) => {
		await new Promise((resolve) => {
			setTimeout(resolve, 1000 / 3)
		})
		return (await p__axios({
			url: this.url + method,
			params: {
				...this.params,
				...params,
			},
		})).data.response
	}
	method__users__get = async (
		offset = 0,
		ids = [
			1,
		],
	) => {
		const response = await this.request(
			'users.get',
			{
				offset: offset,
				user_ids: ids,
			},
		)
		return response
	}
	method__messages__get = async (
		offset = 0,
		count = 20,
	) => {
		const response = await this.request(
			'messages.get',
			{
				offset: offset,
				count: count,
			}
		)
		return response
	}
	method__messages__get_history = async (
		offset = 0,
		count = 20,
		id,
	) => {
		const response = await this.request(
			'messages.getHistory',
			{
				peer_id: id,
			}
		)
		return response
	}
	method__messages__delete = async (
		offset = 0,
		ids = [],
	) => {
		const response = await this.request(
			'messages.getDialogs',
			{
				offset: offset,
				message_ids: ids,
			}
		)
		return response
	}
	get_messages = async () => {
		const sequence = []
		let offset = 0
		while (true) {
			const response = await this.method__messages__get(offset, 200)
			{
				(async () => {
					console.log(JSON.stringify(response, null, '\t'))
				})()
			}
			sequence.push(response.items)
			offset += response.items.length
			if (response.count <= offset) {
				break
			}
		}
		return sequence
	}
}
