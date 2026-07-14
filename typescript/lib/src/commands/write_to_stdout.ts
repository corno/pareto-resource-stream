import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/interface/commands"

export const $$: interface_.write_to_stdout = p_.command(($p, on_success) => {
    process.stdout.write(Buffer.from($p.data.__get_raw()))
    on_success()
})