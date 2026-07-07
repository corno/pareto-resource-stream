import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/interface/command_actions"

export const $$: interface_.write_to_stderr = p_.command(($p, on_success) => {
    process.stderr.write($p.data)
    on_success()
})