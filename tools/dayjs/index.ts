import dayjs from 'dayjs';

var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')

dayjs.extend(utc)
dayjs.extend(timezone)

export default dayjs as any;