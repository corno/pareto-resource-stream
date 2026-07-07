
import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/interface/query_actions"

export const $$: interface_.get_instream_data = p_.query(($p, on_value) => {

    const stdin = process.stdin;
    let data = '';
    stdin.setEncoding('utf8');

    stdin.on('data', (chunk: string) => {
        data += chunk;
    });

    stdin.on('end', () => {
        on_value(data);
    });

    stdin.resume();
})