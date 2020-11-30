import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import styled from 'styled-components'

const Course = (props) =>{
    const [course, setCourse] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const slug = props.match.params.slug
        const url = `/api/v1/courses/${slug}`

        axios.get(url)
        .then(resp => {
            setCourse(resp.data) 
            setLoaded(true)})
        .catch(resp => console.log(resp))
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review:', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN']=csrfToken

        const course_id = course.data.id
        axios.post('/api/v1/reviews', {review, course_id})
        .then(resp=>{
            const included = [...course.included, resp.data.data]
            setCourse({...course, included})
            setReview({title:'', description: '', score:0})
        })
        .catch(resp=>{})
    }

    const setRating = (score, e)=>{
        e.preventDefault()

        setReview({...review, score})
    }
    let reviews
    if(loaded && course.included){
        reviews = course.included.map((item, index)=>{
            return(
                <Review
                    key = {index}
                    attributes = {item.attributes}
                />
            )
        })
    }

    return (
        <Wrapper>
            {
            loaded && 
                <Fragment>
                    <Column>
                        <Main>
                            <Header attributes={course.data.attributes} reviews ={course.included}/>
                            {reviews}
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm 
                        handleChange = {handleChange}
                        handleSubmit = {handleSubmit}
                        setRating = {setRating}
                        attributes = {course.data.attributes}
                        review = {review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}



const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`

const Main = styled.div`
  padding-left: 60px;
`
export default Course