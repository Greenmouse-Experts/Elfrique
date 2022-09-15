<template>
    <title>Trivia Result | Trivia - Elfrique</title>
        <div class="container detailsSent">
            <div class="row justify-content-center">
                <div class="col-lg-5 text-center">
                    <img src="@/assets/images/thank-you.png">
                </div>
                <div class="col-lg-8 text-center">
                    <h3>Thanks For Taking Our Trivia Quiz</h3>

                    <p>You score (<span style="font-weight: 700">{{result.score}}</span>)</p>
                    <router-link to="/trivia-management" class="backbtn"><i class="bi bi-box-arrow-left"></i> Back to Trivia Management Page</router-link>
                    
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        data() {
            return {
                result: ""
            }
        },
        created() {
            this.getResults()
        },
        methods: {
            getResults(){
                let result = JSON.parse(localStorage.getItem('TriviaResult'))
                this.result = result
            }
        },
        mounted(){
            window.scrollTo(0,0)
            history.pushState(null, null, location.href);
            window.onpopstate = function () {
                history.go(1);
            };
        }
    }
</script>