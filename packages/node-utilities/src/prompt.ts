import {isObject, parseOptions} from '@snickbit/utilities'
import prompts from 'prompts'
import Stream from 'stream'

/** @category Prompts */
export type PromptsMethod = (prev: string, answers: Answers, previousQuestion: Question) => Promise<string> | string

/** @category Prompts */
export type PromptType = 'autocomplete' | 'autocompleteMultiselect' | 'confirm' | 'date' | 'invisible' | 'list' | 'multiselect' | 'number' | 'password' | 'select' | 'text' | 'toggle'

/** @category Prompts */
export type AnswerTypes = Date | boolean | number | string

/** @category Prompts */
export type QuestionRecords = Record<string, Question>

/** @category Prompts */
export interface PromptTypeMethod<P = PromptType> {
	(prev: string, answers: Answers, previousQuestion: Question): P
}

interface BaseQuestion<InitialType = string> {
	name: PromptsMethod | string
	message: PromptsMethod | string
	initial: InitialType | PromptsMethod
	format: PromptsMethod

	onRender(this: prompts, kluer: any): void

	onState(state: PromptState): void

	stdin: Stream
	stdout: Stream
}

// Question extensions
interface QuestionMinMax {
	// number | multiselect
	min: number
	max: number
}

interface QuestionHints {
	//  select | multiselect
	hint: string
	warn: string
}

interface QuestionChoices {
	// select | multiselect | autocomplete
	choices: ChoiceDefinition | ChoiceOption[]
}

// Question types
export interface AutoCompleteQuestion extends BaseQuestion<number | string>, QuestionChoices {
	// autocomplete
	type: PromptTypeMethod<'autocomplete'> | 'autocomplete'

	suggest(input, choices): Promise<string[]>

	limit: number
	clearFirst: boolean
	fallback: string
}

/** @category Prompts */
export interface AutoCompleteMultiSelectQuestion extends Omit<MultiSelectQuestion, 'type'> {
	type: PromptTypeMethod<'autocompleteMultiselect'> | 'autocompleteMultiselect'
}

/** @category Prompts */
export interface ConfirmQuestion extends BaseQuestion<boolean>, QuestionChoices {
	type: PromptTypeMethod<'confirm'> | 'confirm'
}

/** @category Prompts */
export interface DateQuestion extends BaseQuestion<Date>, QuestionMinMax {
	// date
	type: PromptTypeMethod<'date'> | 'date'
	locales: PromptsLocales
	mask: string
}

/** @category Prompts */
export interface InvisibleQuestion extends BaseQuestion {
	type: PromptTypeMethod<'invisible'> | 'invisible'
}

/** @category Prompts */
export interface ListQuestion extends BaseQuestion {
	// list
	type: PromptTypeMethod<'list'> | 'list'
	separator: string
}

/** @category Prompts */
export interface MultiSelectQuestion extends Omit<BaseQuestion, 'initial'>, QuestionMinMax, QuestionHints, QuestionChoices {
	// multiselect
	type: PromptTypeMethod<'multiselect'> | 'multiselect'
	instructions: boolean | string
	optionsPerPage: number
}

/** @category Prompts */
export interface NumberQuestion extends BaseQuestion<number> {
	// number
	type: PromptTypeMethod<'number'> | 'number'
	float: boolean
	round: number
	increment: number
}

/** @category Prompts */
export interface PasswordQuestion extends BaseQuestion {
	type: PromptTypeMethod<'password'> | 'password'
}

/** @category Prompts */
export interface SelectQuestion extends BaseQuestion<number | string>, QuestionHints, QuestionChoices {
	type: PromptTypeMethod<'select'> | 'select'
}

/** @category Prompts */
export interface TextQuestion extends BaseQuestion {
	// text
	type: PromptTypeMethod<'text'> | 'text'
	style: 'default' | 'emoji' | 'invisible' | 'password'
}

/** @category Prompts */
export interface ToggleQuestion extends BaseQuestion<boolean> {
	// toggle
	type: PromptTypeMethod<'toggle'> | 'toggle'
	active: string
	inactive: string
}

/** @category Prompts */
export type Question =
	AutoCompleteMultiSelectQuestion |
	AutoCompleteQuestion |
	ConfirmQuestion |
	DateQuestion |
	InvisibleQuestion |
	ListQuestion |
	MultiSelectQuestion |
	NumberQuestion |
	PasswordQuestion |
	SelectQuestion |
	TextQuestion |
	ToggleQuestion

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

type LazyChoice = number | string

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

const defaultPromptOptions = {
	type: 'text',
	name: 'value',
	onState
}

/** @category Prompts */
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
	const options = typeof optionsOrDefault === 'object' ? {...optionsOrDefault, type: 'confirm'} : {type: 'confirm', initial: optionsOrDefault}
	return ask(question, options as Question)
}

/**
 * Prompt the user for input using Prompts.
 * @see https://github.com/terkelg/prompts
 * @category Prompts
 */
export async function ask(question: string, defaultAnswer?: boolean | string): Promise<any>
export async function ask(question: string, options?: Partial<Question>): Promise<any>
export async function ask(question: string, optionsOrDefault?: Partial<Question> | boolean | string): Promise<any> {
	const options = parseOptions(optionsOrDefault, {
		...defaultPromptOptions,
		style: 'default',
		message: question
	}, 'initial')

	// double check that it has a name
	if (!options.name) {
		options.name = 'value'
	}

	if (options.type === 'multiselect' && options.initial) {
		throw new Error('Cannot use initial with multiselect')
	}

	let choices: any[] = []
	let useIndexes = false
	if (options.choices) {
		if (typeof options.initial !== 'number') {
			options.initial = options.choices.indexOf(options.initial)
			if (options.initial === -1) {
				delete options.initial
			}
		}

		choices = options.choices.slice()
		useIndexes = choices.some(isLazyChoice)
		options.choices = []
		for (const choice of choices) {
			if (isLazyChoice(choice)) {
				options.choices.push({title: choice, value: choice})
			} else {
				options.choices.push(choice)
			}
		}
	}

	const answer = (await prompts(options))?.value

	if (useIndexes && choices && answer && choices[answer]) {
		return choices[answer]?.value || choices[answer] || answer
	}

	return answer
}

function isLazyChoice(choice: any): choice is LazyChoice {
	return typeof choice === 'number' || typeof choice === 'string'
}
