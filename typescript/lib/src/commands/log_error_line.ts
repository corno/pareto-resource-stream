import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/interface/commands"


export const $$: interface_.log_error_line = p_.command(($p, on_success) => {
    console.error(
        $p.line
    )
    on_success()
})