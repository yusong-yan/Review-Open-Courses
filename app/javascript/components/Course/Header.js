import React from 'react'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Header = (props)=>{

    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length


    return(
        <Wrapper>
            <h1> <img src = {image_url} alt={name}/>{name}</h1>
            <div>
                <UserReviewCount>{total} User Reviews</UserReviewCount>
                <div className="starRating"></div>
                <Rating score={avg_score}/>
                <ScoreOutOf>{avg_score} out of 5</ScoreOutOf>
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`

const UserReviewCount = styled.div`
  font-size: 18px;
  padding:10px 0;
  font-family: 'Poppins-Bold';
`

const ScoreOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Poppins-Bold';
`
export default Header