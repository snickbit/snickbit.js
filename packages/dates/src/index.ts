import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import updateLocale from 'dayjs/plugin/updateLocale'
import duration, {DatesDuration} from './duration'
import quick from './quick'
import timeago from './timeago'
import relativeTime from 'dayjs/plugin/relativeTime'
import isYesterday from 'dayjs/plugin/isYesterday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import limitedRelativeTime, {LimitedRelativeOptions} from './limited-relative-time'

export type DateInput = string | number | Date | dayjs.Dayjs | Dates | ConfigType;

export type ConfigType = dayjs.ConfigType
export type OptionType = dayjs.OptionType

export interface Dates extends dayjs.Dayjs {
	(input?: DateInput): Dates

	isToday(): boolean;

	datestamp(): string;

	timestamp(): string;

	safeTimestamp(): string;

	time(): string;

	shorttime(): string;

	shortdate(): string;

	shortdatetime(): string;

	duration(input: DateInput, unit?: string): DatesDuration;

	toLimited(input: DateInput, options: Partial<LimitedRelativeOptions>): string;

	fromLimited(input: DateInput, options: Partial<LimitedRelativeOptions>): string;

	toNowLimited(options: Partial<LimitedRelativeOptions>): string;

	fromNowLimited(options: Partial<LimitedRelativeOptions>): string;

	relativeToday(fallbackFormat: string): string;
}

dayjs.extend(isYesterday)
dayjs.extend(isTomorrow)
dayjs.extend(relativeTime)
dayjs.extend(limitedRelativeTime)
dayjs.extend(duration)
dayjs.extend(customParseFormat)
dayjs.extend(updateLocale)
dayjs.extend(quick)
dayjs.extend(timeago)

export const dates: Dates = dayjs as unknown as Dates
