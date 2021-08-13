import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const fetchTrades = () => dispatch => {
    dispatch(tradesLoading());

    return fetch(baseUrl + 'trades')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statueText}`);
                    error.response = response;
                    throw error;
                }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
            }
        )
        .then(response => response.json())
        .then(trades => dispatch(addTrades(trades)))
        .catch(error => dispatch(tradesFailed(error.message )));
};

export const tradesLoading = () => ({
    type: ActionTypes.TRADES_LOADING
});

export const tradesFailed = errMess => ({
    type: ActionTypes.TRADES_FAILED,
    payload: errMess
});

export const addTrades = trades => ({
    type: ActionTypes.ADD_TRADES,
    payload: trades
});

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statueText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
)
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess

});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (campsiteId, rating, author, text) => dispatch => {
    
    const newComment = {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify (newComment),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statueText}`);
                error.response = response;
                throw error;
            }
    },
    error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        })
};

export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
          .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statueText}`);
                error.response = response;
                throw error;
            }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
        .then(response => response.json())
            .then(promotions => dispatch(addPromotions(promotions)))
            .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});



