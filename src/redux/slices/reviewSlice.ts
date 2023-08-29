import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import { TypeReviews } from '../../types/Types';

interface ReviewsState {
  loading: boolean,
  error: string | null;
  reviews: TypeReviews[];
}

const initialState: ReviewsState = {
  loading: false,
  error: "",
  reviews: [],
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    getReviewsStart: (state: ReviewsState) => {
      state.loading = true;
      state.error = null;
    },
    getReviewsError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    getReviewsSuccess: (state, action: PayloadAction<TypeReviews[]>) => {
      return {
        ...state,
        loading: false,
        error: null,
        reviews: action.payload
      }
    },
  }
})

export const { getReviewsSuccess, getReviewsError, getReviewsStart } = reviewsSlice.actions

export default reviewsSlice.reducer;

export const getReviews = (id: number) => async (dispatch: any) => {
  try {
    const reviewsArray: TypeReviews[] = []

    const response = await axios.get("http://localhost:3001/reviews/" + id)

    const { data } = response

    data?.map((info: any) => {
      const review: TypeReviews = {
        id: info.id,
        author: info.author,
        content: info.content,
        rating: info.author_details.rating,
      }
      reviewsArray.push(review)
    })

    dispatch(getReviewsSuccess(reviewsArray))
  } catch (error) {
    dispatch(getReviewsError(error as Error));
  }
}

type reviewForm = {
  reviewText: string,
  rating: number | null
}

export const postReviews = (id: number, review: reviewForm) => async (dispatch: any) => {
  const { rating, reviewText } = review
  try {
    console.log(id, "mas el texto", reviewText, "mas el rating" , rating)

  } catch (error) {

  }
}