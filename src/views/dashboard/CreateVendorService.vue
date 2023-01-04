<template>
    <title>Create Vendor Service | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                Create Vendor Service
            </h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Vendor</li>
                    <li class="breadcrumb-item active">Create Vendor Service</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div create-event-div">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 start-voting-inner-div">
                            <div class="start-vote-details alert alert-dismissible fade show" role="alert">
                                Select the events name to continue.
                                OR Create a new event. <router-link to="/organiser/create-event" class="routers"><strong>Click Here!</strong></router-link>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div  v-if="error" class=" alert-danger alert  alert-dismissible fade show" role="alert">
                                {{error}}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div  v-if="message" class= 'alert-success alert  alert-dismissible fade show' role="alert">
                                {{message}} 
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <form name="form" @submit.prevent="createJobs">
                                <div class="row">
     
                                         <div class="col-lg-12 mt-4">
                                        <label for="vote option">Category</label>
                                        <select v-model="category" name="eventCategory" id="gateway" aria-placeholder="Select Categories" required>
                                            <option value="select vote option" disabled >Select Your Vote Option</option>
                                            <option :value="con.title" v-for="con in categoryArr" :key="con.id" >{{con.name}}</option>

                                        </select>
                                    </div>

                                    <div class="col-lg-12 mt-4">
                                        <label for="vote option">Event Name</label>
                                        <select v-model="eventId" name="gateway" id="gateway" aria-placeholder="Select your event name" required>
                                            <option value="select vote option" disabled >Select Your Vote Option</option>
                                            <option :value="con.id" v-for="con in content" :key="con.id" >{{con.title}}</option>

                                        </select>
                                    </div>
                            
                            
                                    <div v-if="eventId" class="row">
                                        <!--Vendor Ttile-->
                                        <div class="col-lg-12 mt-2">
                                            <label>Vendor Title</label>
                                            <input v-model="job.title" class="input" type="text" placeholder="e.g Event Decorator">
                                        </div>
                                        
                                        <!--Price-->
                                        <div class="col-lg-12 mt-4">
                                            <label for="organiser name">Service Price (NGN)</label>
                                            <input v-model="job.price" class="input" type="number" placeholder="Enter amount">
                                        </div>
                                        
                                        <!--Vendor Image-->
                                        <div class="col-lg-12 mt-4">
                                            <label for="event image">Vendor Service Image</label>
                                            <input class="input" type="file" ref="file" accept=".jpg, .jpeg, .png, .jfif" v-on:change="handleFileUpload()" required>
                                            <small class="text-danger font-weight-bold">(only .jpg, .jpeg, .png, .jfif or .webp format)</small>
                                        </div>
                                        <!--Vendor Description/Details-->
                                        <div class="col-lg-12 mt-4">
                                            <label for="event description">Vendor Description/Details</label>
                                            <textarea v-model="job.description" class="input" cols="30" rows="4" placeholder="Enter details here..."></textarea>
                                        </div>
                                        
                                    </div>
                                    <div class="col-lg-11 mt-4">
                                        <button type="submit" :disabled="loading" >Create Service<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        
                    </div>
                
            
        </div>
    </main>

    <dash-footer/>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    import EventService from '../../service/event.service'
    import VendorService from '../../service/vendor.service'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data(){
            return{
            content: '',
            eventId: '',
            message: '',
            error: '',
            file: '',
            loading: false,
            successful: false,
            job: {
                description: '',
                title: '',
                price: '',
            },
            category: "",
            categoryArr: [
                {
                id: 1,
                name: "Event Decorators",
                title: "eventdecorators"
            },
            {
                id: 2,
                name: "Photographers",
                title: "photographers"
            },
            {
                id: 3,
                name: "Caterers",
                title: "caterers"
            },
            {
                id: 4,
                name: "Disc Jockey",
                title: "discJockey"
            },
            {
                id: 5,
                name: "Fashion Designers",
                title: "fashionDesigners"
            },
            {
                id: 6,
                name: "Event Planers",
                title: "eventPlaners"
            },
            {
                id: 7,
                name: "Invitations and Printing",
                title: "invitationsAndPrinting"
            },
            {
                id: 8,
                name: "Make up Artist",
                title: "makeUpArtist",
            },
            {
                id: 9,
                name: "Others",
                title: "others"
            }
            ]
            }  
        },
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        eventName: function() {
            this.content.find(event => {
                if(event.id == this.eventId){
                    console.log(event.title)
                    return event.title;
                } 
                return null;
            })
         },
        },
        created() {
     if (!this.loggedIn) {
      this.$router.push('/login');
    }

    EventService.getEvents().then
    (
        response => {
            this.content = response.data.events;
        }
    )


    },

    methods:{
        createJobs(){
            this.loading = true;

            let formData = new FormData();
            formData.append('image', this.file);                                                                                                                                                                                                                                           
            formData.append('job_type', this.job.title);
            formData.append('job_description', this.job.description);
            formData.append('budget', this.job.price);
            formData.append('eventCategory', this.category);
            
            VendorService.createJobs(formData, this.eventId).then(response => {
                    
                    this.message = `${this.job.title} JOB Created Successfully`;
                    this.loading = false;
                    window.scrollTo(0,0)

            },
            error => {
                console.log(error);
                this.error = error.response.data.message;
                console.log(error.response.data);


                this.loading = false;
                 window.scrollTo(0,0)
            });
        },

            
        handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
     },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptQuill = document.createElement('script')
        let externalScriptRich = document.createElement('script')

        externalScriptQuill.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/quill.min.js')
        externalScriptRich.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/rich-text.js')

        document.head.appendChild(externalScriptQuill)
        document.head.appendChild(externalScriptRich)
      }
    }
</script>