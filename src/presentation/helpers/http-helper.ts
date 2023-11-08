export const badRequest = (erro: Error) => ({
    statusCode: 400,
    body: erro
})