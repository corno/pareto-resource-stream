import * as p_ from 'pareto-core/resource'

//interface
import * as interface_ from "pareto-stream-api/commands/interfaces"

export const $$: interface_.write_to_stdout = p_.command(($p, on_success) => {
    process.stdout.write($p.data.__get_raw().map(cp => String.fromCodePoint(cp)).join(''))
    on_success()
})