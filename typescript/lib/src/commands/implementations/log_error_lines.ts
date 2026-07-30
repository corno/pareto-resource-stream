import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/commands/interfaces"


export const $$: interface_.log_error_lines = p_.command(($p, on_success) => {
    $p.lines.__get_raw().forEach(($) => {
        console.error(
            $
        )
    })
    on_success()
})