import inquirer, {PromptModule} from 'inquirer'
import validator from 'validator'
import {isFunction, objectFindKey} from '@snickbit/utilities'

/** @category Prompt */
export interface PromptSchema {
	[key: string]: Partial<PromptSchemaRecord>
}

/** @category Prompt */
export interface PromptSchemaRecord extends Omit<inquirer.Question, 'name' | 'validate'> {
	name: string;
	validate: ((input: any, answers?: inquirer.Answers) => string | boolean | Promise<string | boolean>) | string;
	required: boolean;
	error: string;
	choices?: inquirer.ChoiceCollection<inquirer.Answers>
}

/** @category Prompt */
export interface QuestionOptions extends Omit<PromptSchemaRecord, 'name'> {
	message?: string;
	name?: string;

	filter?(input: any): any;
}

/** @internal */
type IObject = { [key: string]: any }

/**
 * Prompts the user for input using Inquirer (advanced).
 * @category Prompt
 */
export async function prompt(schema: PromptSchema, defaults: IObject = {}): Promise<PromptModule> {
	let questions = []

	for (let [name, question] of Object.entries(schema)) {
		let question_config = {
			name,
			message: name,
			default: defaults[name]
		}

		if (typeof question.validate === 'string') {
			const validation_method = objectFindKey(validator, (key) => key.toLowerCase() === `is${question.validate}`.toLowerCase())
			if (validation_method && isFunction(validation_method)) {
				question.validate = (val) => (validation_method as unknown as Function)(val) || (question.error || 'Invalid Input')
			}
		} else if (question.required) {
			question.validate = val => !!val || 'Required'
			delete question.required
		} else {
			question.validate = () => true
		}

		const combined = Object.assign(question_config, question)
		if (!combined.name) {
			throw new Error('Question name is required')
		}

		questions.push(combined)
	}

	return inquirer.prompt(questions)
}

/**
 * Prompt the user for confirmation using Inquirer.
 * @category Prompt
 */
export async function confirm(question: string, options: Partial<QuestionOptions> = {}): Promise<boolean> {
	if (typeof options === 'boolean') {
		options = {
			default: options
		}
	} else {
		options = {
			default: false, ...options
		}
	}

	const {value} = await inquirer.prompt([
		{
			type: 'confirm',
			name: 'value',
			message: question,
			default: options.default
		}
	])
	return value
}

/**
 * Prompt the user for input using Inquirer.
 * @category Prompt
 */
export async function ask(question: string, options?: Partial<QuestionOptions>): Promise<string | any> {
	if (typeof options === 'string') {
		options = {
			type: options as string
		}
	} else if (!options) {
		options = {}
	}

	options = Object.assign({
		type: 'input',
		name: 'value',
		message: question
	}, options)

	if (!options.name) {
		options.name = 'value'
	}

	const answers = await inquirer.prompt([options])
	return answers[options.name]
}
