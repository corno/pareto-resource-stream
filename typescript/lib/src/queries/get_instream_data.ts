
import * as p_ from 'pareto-core/implementation/resource'

//interface
import * as interface_ from "pareto-stream-api/interface/queries"

export const $$: interface_.get_instream_data = p_.query(($p, on_value) => {

    const stdin = process.stdin
    let data: number[] = []
    stdin.setEncoding('utf8')

    stdin.on('data', (chunk: string) => {
        data.push(...chunk.split('').map(c => c.charCodeAt(0)))
    })

    stdin.on('end', () => {
        on_value({
            data: p_.literal.list(data),
        })
    })

    stdin.resume()
    return undefined
})