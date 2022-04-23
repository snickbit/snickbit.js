#!/bin/env node

import {cli} from '@snickbit/node-cli'
import {ask} from '@snickbit/node-utilities'
import {out} from '@snickbit/out'
import {Cycle} from '@snickbit/cycle'
import {template} from 'ansi-styles-template'
import figlet from 'figlet'
import banner from 'figlet/importable-fonts/Banner.js'
import open from 'open'

figlet.parseFont('Banner', banner)

const colors = new Cycle('ansi')
const goodbyes = [
	'Thank you for using Snickbit!',
	'Have a nice day!',
	'See you next time!',
	'So long, and thanks for all the fish!'
]

cli()
.name(figlet.textSync('Nick Lowe', {
	font: 'Banner',
	horizontalLayout: 'default',
	verticalLayout: 'default',
	width: 80,
	whitespaceBreak: true
}))
.run()
.then(async (/* argv */) => {

	const data = {
		name: {
			color: 'red',
			value: 'Nick Lowe'
		},
		handle: {
			color: 'redBright',
			value: '@snickbit'
		},
		email: {
			color: 'cyan',
			value: 'nicklowe@snickbit.com'
		},
		github: {
			color: 'greenBright',
			value: 'https://github.com/snickbit'
		},
		linkedin: {
			color: 'yellowBright',
			value: 'https://www.linkedin.com/in/snickbit'
		},
		npx: {
			color: 'yellow',
			value: 'npx snickbit'
		}
	}

	const keys = Object.keys(data)

	const longest = keys.reduce((a, b) => a.length > b.length ? a : b)
	const shortest = keys.reduce((a, b) => a.length < b.length ? a : b)
	const padding = longest.length - shortest.length + 5

	let message = Object.entries(data).map(([key, value]) => template(`{bold}${key}{/bold}:${' '.repeat(Math.max(2, padding - key.length))}{${value.color}}${value.value}{/${value.color}}`)).join('\n')

	message += '\n\nI\'m actively looking for new opportunities,\nso please don\'t hesitate to get in contact!\n'

	out.block.noExit.fatal.label('').write(message)

	const answer = await ask('What next?', {
		type: 'select',
		choices: [
			{
				title: 'Check out my GitHub',
				value: 'github'
			},
			{
				title: 'Check out my LinkedIn',
				value: 'linkedin'
			},
			{
				title: 'Send me an email',
				value: 'email'
			},
			{
				title: 'Exit',
				value: 'exit'
			}
		]
	})
	switch (answer) {
		case 'github':
			const child = await open(data.github.value, {wait: true})
			break
		case 'linkedin':
			await open(data.linkedin.value, {wait: true})
			break
		case 'email':
			await open(`mailto:${data.email.value}`, {wait: true})
			break
	}

	out.exit.success(goodbyes[Math.floor(Math.random() * goodbyes.length)])
})
.catch(err => out.error(err))
