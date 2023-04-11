app.component('review-list', {
   props: {
       //To receive data we use props
       reviews: {
           type: Array,
           required: true
       },
   },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br/>
                "{{ review.review }}" - Recommendation: {{ review.recommendation }}
            </li>
        </ul>
    </div>
    `,
});