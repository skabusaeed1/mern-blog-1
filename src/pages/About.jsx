import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className="text-3xl font font-semibold text-center my-7">About Tech Blogs</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p className="">
              Welcome to the Tech Blogs! This blog was created by Shaikh Abusaeed as a personal project to share his thoughts and ideas with the world. Abusaeed is a passionate developer who loves to write about technology, coding and everything in between.
            </p>
            <p>
              On this blog, you will find articles and tutorials on topics such as web development, software engineering, and programming languages. Abusaeed is awlays learing and exploring new technologies, so be sure to check back often for new content!
            </p>
            <p className="">
              We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
