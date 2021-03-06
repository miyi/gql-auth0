import React from 'react'
import Post from '../components/Post'
import { graphql, gql } from 'react-apollo'
import PropTypes from 'prop-types'

class ListPage extends React.Component {

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    return (
      <div className='w-100 flex justify-center'>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.data.allPosts.map((post) =>
            <Post key={post.id} post={post} />
          )}
        </div>
      </div>
    )
  }
}

Listpage.propTypes = {
	data: PropTypes.object,
}

const FeedQuery = gql`
	query FeedQuery {
		allPosts(orderBy: createdAt_DESC) {
			id
			imageUrl
			description
		}
	}
`

export default graphql(FeedQuery, { options: {fetchPolicy: 'network-only'}})(ListPage)