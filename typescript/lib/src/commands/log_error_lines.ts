import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/interface/commands"


export const $$: interface_.log_error_lines = p_.command(($p, on_success) => {
    $p.messages.__get_raw().forEach(($) => {
        process.stderr.write(
            $
        )
    })
    on_success()
})