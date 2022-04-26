import isToday from 'dayjs/plugin/isToday'
import {Dates} from './index'

const formats = {
	datestamp: 'YYYY-MM-DD',
	timestamp: 'YYYY-MM-DD HH:mm:ss',
	safeTimestamp: 'YYYY-MM-DD--HHmmss',
	time: 'HH:mm:ss',
	shorttime: 'hh:mm a',
	shortdate: 'MM/DD/YYYY',
	shortdatetime: 'MM/DD/YYYY hh:mm a'
}

export default (_option, Dayjs, dayjs) => {
	dayjs.extend(isToday)

	for (const [name, definition] of Object.entries(formats)) {
		dayjs[name] = () => dayjs.format(definition)
		Dayjs.prototype[name] = function () {
			return this.format(definition)
		}
	}

	const oldFormat = Dayjs.prototype.format

	Dayjs.prototype.format = function (this: Dates, template): string {
		return oldFormat.bind(this)(formats[template] || template)
	}

	/**
	 * Simple date formatting
	 */
	Dayjs.prototype.simple = function (this: Dates): string {
		if (this.isToday()) {
			return this.shorttime()
		} else {
			return this.shortdatetime()
		}
	}
}
