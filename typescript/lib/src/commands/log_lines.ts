import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/interface/commands"

export const $$: interface_.log_lines = p_.command(($p, on_success) => {
    
    $p.lines.__get_raw().forEach(($) => {
        console.log(
            $
        )
    })
    on_success()
})