// @ts-ignore
import {arrayShuffle, isType} from '@snickbit/utilities'
import * as presets from './presets'

export class Cycle {
	items: any[] = []
	index: number

	constructor(items?: any[]);
	constructor(preset?: string);
	constructor(itemsOrPreset?: any[] | string);
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

	get firstIndex() {
		return 0
	}

	get lastIndex() {
		return this.items.length - 1
	}

	next(save: boolean = true) {
		const nextIndex = this.nextIndex
		if (save) this.index = nextIndex
		return this.items[nextIndex]
	}

	prev(save: boolean = true) {
		const prevIndex = this.prevIndex
		if (save) this.index = prevIndex
		return this.items[prevIndex]
	}

	first(save: boolean = false) {
		const firstIndex = this.firstIndex
		if (save) this.index = firstIndex
		return this.items[firstIndex]
	}

	last(save: boolean = false) {
		const lastIndex = this.lastIndex
		if (save) this.index = lastIndex
		return this.items[lastIndex]
	}

	current() {
		return this.items[this.index]
	}

	get(index: number, save: boolean = false) {
		const itemIndex = index % this.items.length
		if (save) this.index = itemIndex
		return this.items[itemIndex]
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

export function cycle(items: any[]) {
	return new Cycle(items)
}
