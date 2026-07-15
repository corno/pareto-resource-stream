import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/interface/commands"

export const $$: interface_.write_to_stderr = p_.command(($p, on_success) => {
    process.stderr.write($p.data.__get_raw().map(cp => String.fromCodePoint(cp)).join(''))
    on_success()
})