import EventEmitter from 'events'

let _emitter

/** @internal */
function useEmitter() {
	if (!_emitter) {
		_emitter = new EventEmitter()
	}
	return _emitter
}

/**
 * Add a function to be called before the process exits.
 * @category Before Exit
 */
export function beforeExit(callback: () => void) {
	const emitter = useEmitter()

	//so the program will not close instantly
	process.stdin.resume()

	// attach user callback to the process event emitter
	// if no callback, it will still exit gracefully on Ctrl-C
	callback = callback || (() => void 0)
	emitter.on('cleanup', callback)

	// do app specific cleaning before exiting
	process.on('exit', () => emitter.emit('cleanup'))

	// catch ctrl+c event and exit normally
	process.on('SIGINT', () => process.exit(2))

	//catch uncaught exceptions, trace, then exit normally
	process.on('uncaughtException', () => process.exit(99))
}
