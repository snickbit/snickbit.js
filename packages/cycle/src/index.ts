import {arrayShuffle, isType} from '@snickbit/utilities'
import * as presets from './presets'

export class Cycle {
	#started: boolean
	items: any[] = []
	index: number

	constructor(items?: any[])
	constructor(preset?: string)
	constructor(itemsOrPreset?: any[] | string)
	constructor(itemsOrPreset?: any[] | string) {
		this.index = 0
		if (!itemsOrPreset) {
			this.items = []
		} else if (isType(itemsOrPreset, 'array')) {
			this.items = (itemsOrPreset as Array<any>).slice()
		} else if (isType(itemsOrPreset, 'string')) {
			this.items = presets[itemsOrPreset as keyof typeof presets]
		} else {
			throw new TypeError('Invalid type for items, expected array or string')
		}
	}

	get prevIndex() {
		return (this.index - 1 + this.items.length) % this.items.length
	}

	get nextIndex() {
		return (this.index + 1) % this.items.length
	}

	get currentIndex() {
		return this.index
	}

	get firstIndex() {
		return 0
	}

	get lastIndex() {
		return this.items.length - 1
	}

	getIndex(index: number, save = true) {
		if (save) this.index = index
		this.#started = true
		return this.items[index]
	}

	next(save?: boolean) {
		return this.getIndex(this.#started ? this.nextIndex : this.currentIndex, save)
	}

	prev(save?: boolean) {
		return this.getIndex(this.prevIndex, save)
	}

	first(save = false) {
		return this.getIndex(this.firstIndex, save)
	}

	last(save = false) {
		return this.getIndex(this.lastIndex, save)
	}

	current() {
		return this.items[this.currentIndex]
	}

	get(index: number, save = false) {
		return this.getIndex(index % this.items.length, save)
	}

	set(index: number, value: any) {
		this.items[index] = value
	}

	push(value: any) {
		this.items.push(value)
	}

	remove(value: any) {
		this.items.splice(this.items.indexOf(value), 1)
	}

	shuffle() {
		this.items = arrayShuffle(this.items)
	}
}

export function cycle(items?: any[]): Cycle
export function cycle(prefix?: string): Cycle
export function cycle(itemsOrPreset?: any[] | string) {
	return new Cycle(itemsOrPreset)
}
