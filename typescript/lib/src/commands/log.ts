import * as p_ from 'pareto-core/implementation/resource'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//interface
import * as interface_ from "pareto-stream-api/interface/commands"

//dependencies
import * as t_fp_to_list_of_characters from "pareto-fountain-pen/implementation/transformers/prose/list_of_characters"

export const $$: interface_.log = p_.command(($p, on_success) => {
    process.stdout.write(
        p_text_from_list( //this might be a bit inefficient, but it is the simplest way to do it
            t_fp_to_list_of_characters.Paragraph(
                $p.message,
                {
                    'indentation': '    ',
                    'newline': '\n',
                }
            ),
            ($) => $
        )
    )
    on_success()
})