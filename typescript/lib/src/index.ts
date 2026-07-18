import * as p_ from 'pareto-core/interface/resource'

import { $$ as c_stream_log_error_line } from "./commands/log_error_line.js"
import { $$ as c_stream_log_error_lines } from "./commands/log_error_lines.js"
import { $$ as c_stream_log_lines } from "./commands/log_lines.js"
import { $$ as c_stream_write_to_stderr } from "./commands/write_to_stderr.js"
import { $$ as c_stream_write_to_stdout } from "./commands/write_to_stdout.js"

import { $$ as q_stream_get_instream_data } from "./queries/get_instream_data.js"

export const $ = {
    'commands': {
        'log error line': c_stream_log_error_line,
        'log error lines': c_stream_log_error_lines,
        'log lines': c_stream_log_lines,
        'write to stderr': c_stream_write_to_stderr,
        'write to stdout': c_stream_write_to_stdout,

    },
    'queries': {
        'get instream data': q_stream_get_instream_data,
    }
} satisfies p_.Resource