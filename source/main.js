import p__fs from 'fs'
//
import m__api from './modules/api.js'
//
{
	(async () => {
		const token = process.env.token
		const instance = new m__api(token)
		const sequence = await instance.get_messages()
		const data = JSON.stringify(sequence, null, '\t')
		p__fs.writeFileSync('dump.json', data)
	})()
}
