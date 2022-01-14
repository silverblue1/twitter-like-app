import React from 'react'

import Status from './Status';

const StatusList = ({posts}) => {

    return (
        <div>
            {
                posts.length > 0 &&
                posts.map((post) => (
                    <Status 
                    key={post.id} 
                    text={post.post}
                    />
                ))
            }
        </div>
    )
}

export default StatusList;