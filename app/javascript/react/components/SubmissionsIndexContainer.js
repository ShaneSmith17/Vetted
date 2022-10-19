import React, { useState, useEffect } from 'react'

const SubmissionsIndexContainer = (props) => {
  const [submissions, setSubmissions] = useState([])

  const getSubmissions = async () => {
    try {
      const response = await fetch("/api/v1/submissions")
      if (!response.ok) {
        const errorMessage = `${response.status}(${response.statusText})`
        throw new Error(errorMessage)
      }
      const submissionData = await response.json()
      setSubmissions(submissionData)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSubmissions()
  }, [submissions.length])

  let submissionList 
  submissionList = submissions.map((submission) => {
    return (
      <li key={submission.id}>
        {submission.name}
        <p>Body: {submission.body}</p>
      </li>
    )
  })

  return (
    <div> 
      <h1>List of Resources</h1>
      {submissionList}
    </div>
  )
}

export default SubmissionsIndexContainer