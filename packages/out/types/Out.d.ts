import {CaseType, OutPersistent, OutSettings, OutState} from './config';

export interface Out extends Function {
	log: Out;
	info: Out;
	silly: Out;
	trace: Out;
	warn: Out;
	debug: Out;
	verbose: Out;
	notice: Out;
	exception: Out;
	error: Out;
	throw: Out;
	fatal: Out;
	success: Out;
	done: Out;
	exit: Out;
	noExit: Out;
	broken: Out;
	center: Out;
	title: Out;
	block: Out;
	force: Out;
	ln: Out;

	(...messages: any[]): Out;

	apply(this: Out, ...messages: any[]): Out;

	call(...messages: any[]): Out;
}

export declare class Out extends Function {
	state: Partial<OutState>;
	persistent: Partial<OutPersistent>;
	#private;

	constructor();
	constructor(options: Partial<OutSettings>);
	constructor(name: string);
	constructor(name: string, options: Partial<OutSettings>);
	constructor(name?: string | Partial<OutSettings>, options?: Partial<OutSettings>);

	example(): void;

	config(options: Partial<OutSettings>): Out;
	config(option: keyof OutSettings, value: boolean): Out;

	clone(): any;
	clone(options: Partial<OutSettings>): any;
	clone(name: string): any;
	clone(name: string, options: Partial<OutSettings>): any;
	clone(name?: string | Partial<OutSettings>, options?: Partial<OutSettings>): any;

	write(...messages: any[]): Out;

	rule(symbol?: string, min?: number, max?: number): Out;

	_(message: string): void;
	_(exit: boolean): void;

	verbosity(verbosity?: number): Out;

	v(verbosity?: number): Out;

	isVerbose(level?: number): boolean;

	getVerbosity(name?: string): number;

	setVerbosity(level?: number | null): Out;

	prefix(text?: string, verbosity?: number | null): Out;

	formatter(callback: (messages: string) => string): Out;

	before(callback: () => void): Out;

	after(callback: () => void): Out;

	extra(...args: any[]): Out;

	extraVerbosity(extras_verbosity?: number): Out;

	ev(extras_verbosity: number): Out;

	case(type: CaseType): Out;

	heading(heading: string): Out;

	label(label: string): Out;

	clear(): Out;

	disable(exclusions?: string[]): Out;

	enable(): Out;

	lock(key: string): Out;

	clearLock(): Out;

	isLocked(key: string): boolean;
}

//# sourceMappingURL=Out.d.ts.map
