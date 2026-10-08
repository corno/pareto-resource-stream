import * as p_ from 'pareto-core/interface/resource'

import { $$ as c_stream_log_error_line } from "./commands/implementations/log_error_line.js"
import { $$ as c_stream_log_error_paragraph } from "./commands/implementations/log_error_paragraph.js"
import { $$ as c_stream_log_paragraph } from "./commands/implementations/log_paragraph.js"
import { $$ as c_stream_write_to_stderr } from "./commands/implementations/write_to_stderr.js"
import { $$ as c_stream_write_to_stdout } from "./commands/implementations/write_to_stdout.js"

import { $$ as q_stream_get_instream_data } from "./queries/implementations/get_instream_data.js"

export const $ = {
    'commands': {
        'log error line': c_stream_log_error_line,
        'log error paragraph': c_stream_log_error_paragraph,
        'log paragraph': c_stream_log_paragraph,
        'write to stderr': c_stream_write_to_stderr,
        'write to stdout': c_stream_write_to_stdout,

    },
    'queries': {
        'get instream data': q_stream_get_instream_data,
    }
} satisfies p_.Resource