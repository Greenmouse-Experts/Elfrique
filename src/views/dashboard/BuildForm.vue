<template>
  <title>Create Form | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Create Form</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Forms</li>
          <li class="breadcrumb-item active">Build Form</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container start-voting-div create-event-div">
      <div class="row justify-content-center">
        <div class="col-lg-11 start-voting-inner-div">
          <div
            class="start-vote-details alert alert-dismissible fade show"
            role="alert"
          >
            Select the form name to continue.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            v-if="error"
            class="alert-danger alert alert-dismissible fade show"
            role="alert"
          >
            {{ error }}}}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            v-if="message"
            class="alert-success alert alert-dismissible fade show"
            role="alert"
          >
            {{ message }}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <form @submit.prevent="buildForm">
            <div class="row">
              <div class="col-lg-12 mt-4">
                <label for="vote option">Event Form Name</label>
                <select
                  v-model="formId"
                  name="gateway"
                  @input="changeForm($event)"
                  id="gateway"
                  aria-placeholder="Select your event name"
                  required
                >
                  <option value="select vote option" disabled>
                    Select Your Form Option
                  </option>
                  <option
                    :value="con.id"
                    v-for="con in selectedContent"
                    :key="con.id"
                  >
                    {{ con.title }}
                  </option>
                </select>
              </div>
            </div>

            <div class="row justify-content-center" style="margin-top: 2%">
              <div class="col-lg-11 start-voting-inner-div">
                <div class="row">
                  <div id="fb-editor" v-if="formId"></div>
                  <button type="button" v-if="formId" @click="buildForm">
                    Build Form
                  </button>

                  <!--<form @submit.prevent="submitForm($event)"><div id="render-Container"></div></form>-->
                  <!-- <section v-if="formId"  class="buildForm mt-5">
                                                <div class="row headerBuild">
                                                    <h4>Build Your Form </h4>
                                                    <p>Build your form by adding your desire field below</p>
                                                </div>
                                                <div class="container mt-2">
                                                    <div v-for="(con,index) in QuestionForm"  :key="index" class="row mt-2">
                                                        <hr>
                                                        <div class="col-lg-12">
                                                            <h6>Question</h6>
                                                            <input v-model="con.question" class="input" type="text" placeholder="Question">
                                                        </div>
                                                        <div class="col-lg-12 mt-3">
                                                            <div class="dropdown">
                                                                <h6>Pick Answer Field</h6>
                                                                <select v-model="con.type" class="btn answerField dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <option>Single Text Field</option>
                                                                    <option>Multi-Text Field</option>
                                                                    <option>Select Dropdown</option>
                                                                    <hr>
                                                                    <option>Check Boxes</option>
                                                                    <option>Radio Button</option>
                                                                    <hr>
                                                                    <option>Date Field</option>
                                                                    <option>Time Field</option>
                                                                    <option>Upload File Field</option>
                                                                    <hr>
                                                                    <option>Button</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        Single Text Field--
                                                        <div v-if="con.type=='Single Text Field'" class="col-lg-12 mt-3">
                                                            <h6>Single Text Field</h6>
                                                            <input class="addInput" type="text" placeholder="Start Typing">
                                                        </div>
                                                        Multi-Text Field--
                                                        <div v-else-if="con.type=='Multi-Text Field'" class="col-lg-12 mt-3">
                                                            <h6>Multi-Text Field</h6>
                                                            <textarea class="addInput" cols="30" rows="3" placeholder="Start Typing"></textarea>
                                                        </div>
                                                        Select Dropdown--
                                                        <div v-else-if="con.type=='Select Dropdown'"  class="col-lg-12">
                                                            <h6>Select Dropdown</h6>
                                                            <select class="addInput mb-2">
                                                                <option>Options will appear hear </option>
                                                            </select>
                                                            <a class="addOption">Add Options</a>
                                                            <div class="mt-2" v-for="(n,idx) in numberOfOption" :key="idx">
                                                                
                                                                <input v-model="con.options[idx]" type="text" placeholder="type in option">
                                                            </div>
                                                            <div class="mt-2">
                                                                <a type="button" class="btn-success btn-sm"  v-on:click="addOption">Add Option</a>
                                                            </div>
                                                        </div>
                                                        Check Boxes--
                                                        <div v-else-if="con.type=='Check Boxes'"  class="col-lg-12 mt-3">
                                                            <h6>Check Boxes</h6>
                                                            <div v-for="(n,idx) in numberOfOption" :key="idx" class="mb-1">
                                                                <input  type="checkbox" name="checbox" id="checkbox1"> <input v-model="con.options[idx]" type="text" placeholder="type in your option">
                                                            </div>
                                                            
                                                            <div class="mt-2">
                                                                <a type="button" class="btn-success btn-sm"  v-on:click="addOption">Add Option</a>
                                                            </div> 
                                                        </div>
                                                       Radio Button--
                                                        <div v-else-if="con.type=='Radio Button'" class="col-lg-12 mt-3">
                                                            <h6>Radio Button</h6>
                                                            <div v-for="(n,idx) in numberOfOption" :key="idx" class="mb-1">
                                                                <input  type="radio" name="radio" id="radio1"> <input v-model="con.options[idx]" type="text" >
                                                            </div>
                            
                                                            <div class="mt-2">
                                                            <a type="button" class="btn-success btn-sm"  v-on:click="addOption">Add Option</a>
                                                            </div>
                                                        </div>
                                                        Date Field--
                                                        <div v-else-if="con.type=='Date Field'" class="col-lg-12 mt-3">
                                                            <h6>Date Field</h6>
                                                            <input class="addInput" type="date">
                                                        </div>
                                                        Time Field--
                                                        <div v-else-if="con.type=='Time Field'" class="col-lg-12 mt-3">
                                                            <h6>Time Field</h6>
                                                            <input class="addInput" type="time">
                                                        </div>
                                                        Upload File Field--
                                                        <div v-else-if="con.type=='Upload File Field'" class="col-lg-12 mt-3">
                                                            <h6>Upload File Field</h6>
                                                            <input class="addInput" type="file">
                                                        </div>
                                                        Button--
                                                        <div v-else-if="con.type=='Button'" class="col-lg-12 mt-3">
                                                            <h6>Button</h6>
                                                            <input class="addButton" type="submit" value="Submit">
                                                            <input type="text" value="Button name">
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-lg-12 mt-3">
                                                            <button v-on:click="addQuestion" type="button" class="newField"><i class="bi bi-plus-circle-fill"></i> Add New Field</button>
                                                        </div>
                                                        Create Form Button--
                                                        <div class="col-lg-12 mt-4">
                                                            <button type="submit" class="btn btn-success" :disabled="loading" >Build Form <span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                                                        </div>
                                                </div>
                                            </section> --->
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
   import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    import EventService from '../../service/form.service' ;

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data(){
          return{
            configuration: {},
              Content:{
                    title:'',
                    description:'',
                    startdate:'',
                    closedate:'',
                    timezone:'Africa/Lagos',
                    type:'',
                    fee:'',
                },
                file: '',
                error: '',
                editor: null,
                loading: false,
                formCreated: false,
                formId: '',
                resultState: [],
                message: '',
                selectedContent: '',
                numberOfOption: 2,
                QuestionForm: [
                    {
                        question: '',
                        type: '',
                        options: [],
                    }
                ],


            }
        },

    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },


  },

  created() {

    if (!this.loggedIn) {
      this.$router.push('/login');
        }

    EventService.getForms().then
    (
        response => {
            this.selectedContent = response.data.form;
        }
    )
    },

    methods:{
        changeForm(value) {
            setTimeout(function () {
            this.editor = $("#fb-editor").formBuilder();
            }, 1000);
        },

        buildForm() {
            this.renderForm();
            setTimeout(function () {
                        const result = this.editor.actions.save();
                        console.log("result:", JSON.stringify(result));
                        this.resultState = result;
            }, 1000);
        },

        renderForm() {
            setTimeout(function () {
                const formRenderOptions = {formData: this.resultState};
                        $("#render-Container").formRender(formRenderOptions);
            }, 3000);
        },


       /* buildForm(){
            this.loading = true;
            console.log(this.QuestionForm)

            if (this.QuestionForm){
                for (let i = 0; i < this.QuestionForm.length; i++) {
                let formData = new FormData();
                formData.append('question', this.QuestionForm[i].question)
                formData.append('type', this.QuestionForm[i].type)
                for (let j = 0; j < this.QuestionForm[i].options.length; j++) {
                    formData.append('options['+j+']', this.QuestionForm[i].options[j])
                }

                EventService.buildForm(formData, this.formId).then
                (
                    response => {
                        console.log(response);
                        this.message = "Your form has been created successfully";
                        this.loading = false;
                        window.scrollTo(0,0)

                    },

                    error => {
                        this.error = error.response.data.message;
                        this.message = "";
                        this.loading = false;
                        console.log(error);
                        window.scrollTo(0,0)
                    }
                )
            }
            }

        }, */

        addQuestion(){
            this.QuestionForm.push({
                question: '',
                type: '',
                options: [],
            });
        },

        addOption(){
            this.numberOfOption++;
        },


        handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
     },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptOne = document.createElement('script')
        let externalScriptTwo = document.createElement('script')
        let externalScriptThree = document.createElement('script')
        let externalScriptFour = document.createElement('script')
        let externalScriptFive = document.createElement('script');

        externalScriptOne.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js')
        externalScriptTwo.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js')
        externalScriptThree.setAttribute('src', 'https://formbuilder.online/assets/js/form-builder.min.js')
        externalScriptFour.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/form.js')
        externalScriptFive.setAttribute('src', 'https://formbuilder.online/assets/js/form-render.min.js')

        document.head.appendChild(externalScriptOne)
        document.head.appendChild(externalScriptTwo)
        document.head.appendChild(externalScriptThree)
        document.head.appendChild(externalScriptFour)
        document.head.appendChild(externalScriptFive)
      }
    }
</script>
