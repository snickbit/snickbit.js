import prompts from 'prompts'
import {isObject, parseOptions} from '@snickbit/utilities'
import Stream from 'stream'

export type PromptsFunction = (prev: string, answers: Answers, previousQuestion: Question) => string
export type PromptsPromise = (prev: string, answers: Answers, previousQuestion: Question) => Promise<string>

export type PromptType = 'text' | 'password' | 'invisible' | 'number' | 'confirm' | 'list' | 'toggle' | 'select' | 'multiselect' | 'autocompleteMultiselect' | 'autocomplete' | 'date'

/** @category Prompts */
export interface QuestionRecords {
	[key: string]: Question
}

/**
 * @category Prompts
 * @see https://github.com/terkelg/prompts
 */
export interface Question {
	type: PromptType | ((prev: string, answers: Answers, previousQuestion: Question) => PromptType),
	name: string | PromptsFunction,
	message: string | PromptsFunction,
	initial: string | PromptsFunction | PromptsPromise,
	format: PromptsFunction | PromptsPromise,
	onRender: (this: prompts, kluer: any) => void
	onState: (state: PromptState) => void
	stdin: Stream
	stdout: Stream

	// text
	style: 'default' | 'password' | 'invisible' | 'emoji'

	// number
	float: boolean
	round: number
	increment: number

	// list
	separator: string

	// toggle
	active: string
	inactive: string

	// autocomplete
	suggest: (input, choices) => Promise<string[]>
	limit: number
	clearFirst: boolean
	fallback: string

	// date
	locales: PromptsLocales
	mask: string

	// multiselect
	instructions: string | boolean
	optionsPerPage: number

	// number | multiselect
	min: number
	max: number

	// select | multiselect | autocomplete
	choices: ChoiceDefinition | ChoiceOption[]

	//  select | multiselect
	hint: string
	warn: string
}

/** @category Prompts */
export interface PromptsLocales {
	months: string[],
	monthsShort: string[],
	weekdays: string[],
	weekdaysShort: string[]
}

/** @category Prompts */
export interface Answers {
	[key: string]: string
}

/** @category Prompts */
export interface ChoiceRecords {
	[key: string]: ChoiceOption
}

/** @category Prompts */
export interface ChoiceDefinition {
	title: string
	value: any
}

/** @category Prompts */
export type ChoiceOption = string | ChoiceDefinition


export async function prompt(questions: Question[] | QuestionRecords): Promise<Answers> {
	if (isObject(questions)) {
		const answers: Answers = {}
		for (const key in questions) {
			answers[key] = await prompts(questions[key])
		}

		return answers
	}

	return prompts(questions)
}


/**
 * Prompt the user for confirmation using Prompts.
 * @see https://github.com/terkelg/prompts
 * @category Prompts
 */
export async function confirm(question: string, defaultAnswer?: boolean): Promise<boolean>;
export async function confirm(question: string, options?: Partial<Question>): Promise<boolean>;
export async function confirm(question: string, optionsOrDefault?: Partial<Question> | boolean): Promise<boolean> {
	const options = parseOptions(optionsOrDefault, {
		type: 'confirm',
		name: 'value',
		message: question
	}, 'initial')

	// double check that it has a name
	if (!options.name) {
		options.name = 'value'
	}

	return (await prompts(options))?.value ?? false
}

/**
 * Prompt the user for input using Prompts.
 * @see https://github.com/terkelg/prompts
 * @category Prompts
 */
export async function ask(question: string, defaultAnswer?: string): Promise<string | any>;
export async function ask(question: string, options?: Partial<Question>): Promise<string | any>;
export async function ask(question: string, optionsOrDefault?: Partial<Question> | string): Promise<string | any> {
	const options = parseOptions(optionsOrDefault, {
		type: 'text',
		name: 'value',
		style: 'default',
		message: question
	}, 'initial')

	// double check that it has a name
	if (!options.name) {
		options.name = 'value'
	}

	return (await prompts(options))?.value ?? ''
}
