import {Dates} from './index'

export default (option, Dayjs) => {
	Dayjs.prototype.timeago = function (this: Dates): string {
		const week_ago = this.subtract(7, 'd')
		return this.isBefore(week_ago) ? this.format('date') : this.fromNow()
	}
}
