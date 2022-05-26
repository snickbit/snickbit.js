import {isObject, parseOptions} from '@snickbit/utilities'
import prompts from 'prompts'
import Stream from 'stream'

export type PromptsFunction = (prev: string, answers: Answers, previousQuestion: Question) => string
export type PromptsPromise = (prev: string, answers: Answers, previousQuestion: Question) => Promise<string>

export type PromptType = 'autocomplete' | 'autocompleteMultiselect' | 'confirm' | 'date' | 'invisible' | 'list' | 'multiselect' | 'number' | 'password' | 'select' | 'text' | 'toggle'

/** @category Prompts */
export type QuestionRecords = Record<string, Question>

/**
 * @category Prompts
 * @see https://github.com/terkelg/prompts
 */
export interface Question {
	type: PromptType | ((prev: string, answers: Answers, previousQuestion: Question) => PromptType)
	name: PromptsFunction | string
	message: PromptsFunction | string
	initial: PromptsFunction | PromptsPromise | string
	format: PromptsFunction | PromptsPromise
	onRender: (this: prompts, kluer: any) => void
	onState: (state: PromptState) => void
	stdin: Stream
	stdout: Stream

	// text
	style: 'default' | 'emoji' | 'invisible' | 'password'

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
	instructions: boolean | string
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
	months: string[]
	monthsShort: string[]
	weekdays: string[]
	weekdaysShort: string[]
}

/** @category Prompts */
export type Answers = Record<string, string>

/** @category Prompts */
export type ChoiceRecords = Record<string, ChoiceOption>

/** @category Prompts */
export interface ChoiceDefinition {
	title: string
	value: any
}

/** @category Prompts */
export interface PromptState {
	aborted: boolean
}

/** @category Prompts */
export type ChoiceOption = ChoiceDefinition | string

/**
 * @category Prompts
 * @see https://github.com/terkelg/prompts/issues/252
 */
function onState(state: PromptState) {
	if (state.aborted) {
		// If we don't re-enable the terminal cursor before exiting
		// the program, the cursor will remain hidden
		process.stdout.write('\x1B[?25h')
		process.stdout.write('\n')
		process.exit(1)
	}
}

/** @internal */
const defaultPromptOptions = {
	type: 'text',
	name: 'value',
	onState
}

export async function prompt(questions: Question[] | QuestionRecords): Promise<Answers> {
	if (isObject(questions)) {
		const answers: Answers = {}
		for (const key in questions) {
			answers[key] = await prompts({...defaultPromptOptions, ...questions[key]})
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
export async function confirm(question: string, defaultAnswer?: boolean): Promise<boolean>
export async function confirm(question: string, options?: Partial<Question>): Promise<boolean>
export async function confirm(question: string, optionsOrDefault?: Partial<Question> | boolean): Promise<boolean> {
	const options = parseOptions(optionsOrDefault, {
		...defaultPromptOptions,
		type: 'confirm',
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
export async function ask(question: string, defaultAnswer?: string): Promise<any | string>
export async function ask(question: string, options?: Partial<Question>): Promise<any | string>
export async function ask(question: string, optionsOrDefault?: Partial<Question> | string): Promise<any | string> {
	const options = parseOptions(optionsOrDefault, {
		...defaultPromptOptions,
		style: 'default',
		message: question
	}, 'initial')

	// double check that it has a name
	if (!options.name) {
		options.name = 'value'
	}

	return (await prompts(options))?.value ?? ''
}
