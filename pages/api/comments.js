// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT



export default function comments(req, res) {
  const client = new GraphQLClient(graphqlAPI, {
    header: {
      authentication: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  const query = gql`
    mutation CreateComment($name: Sting!, $email: Stirng!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: { slug:$slug }}}) {id}
    }
  `

  const result = await client.request(query, req.body)

  return res.status(200).send(result);
}
