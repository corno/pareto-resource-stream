import * as p_ from 'pareto-core/resource'

//interface
import * as interface_ from "pareto-stream-api/commands/interfaces"
import * as ser_paragraph from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/serializers"


export const $$: interface_.log_error_paragraph = p_.command(($p, on_success) => {
    ser_paragraph.Paragraph($p.paragraph, $p, (text) => {
        process.stderr.write(text)
    })
    on_success()
})