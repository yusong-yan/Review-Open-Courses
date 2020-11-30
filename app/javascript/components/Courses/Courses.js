import React, { useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Course from './Course'
import Header from './Header'
import styled from 'styled-components'

const Courses = () =>{
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        axios.get('/api/v1/courses.json')
        .then(resp => {
            setCourses(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [courses.length])

    const grid = courses.map(item =>{
        return (
            <Course 
                key = {item.attributes.name} attributes = {item.attributes}
            />
        )
    })

    return (
        <div>
            <Header/>
            <Home>
                <Grid>
                    {grid}
                </Grid>
            </Home>
        </div>
    )
}

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 20px;
  }
`
const Start = styled.div`
  padding: 100px 100px 10px 100px;
  h1{
      font-size:42px
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`

export default Courses