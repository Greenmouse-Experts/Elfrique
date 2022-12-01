<template>
  <title>
    Vote Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <section class="service-header">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h1>Voting Management System</h1>
          <p>
            Do you have a Voting, Reality TV Shows or Award contest coming up??
            We can help you manage your voting system and set up your award
            contest for FREE from any part of the world using a world class,
            digitalized voting system that is easy to navigate.
          </p>
          <div class="divGetStarted">
            <router-link to="/signup" class="btn-getStarted"
              >Get Started!</router-link
            >
          </div>
        </div>
        <div class="col-md-5 text-center">
          <div class="img-area">
            <img
              src="@/assets/images/service-vote.png"
              ondragstart="return false;"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg-11 mb-5 search-section">
          <form>
            <input
              class="searchbox-input input"
              type="text"
              placeholder="Search here ..."
            />
            <input class="date-input input" type="date" />
            <input
              class="search-input input"
              type="submit"
              value="Search &#128269;"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--Service Header Ends-->

  <!--Service Content Vote-->
  <section class="service-content-vote" mb-5>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul
            class="nav nav-pills nav-fill mb-4 mt-2 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active tabs-button"
                id="pills-pageantry-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-pageantry"
                type="button"
                role="tab"
                aria-controls="pills-pageantry"
                aria-selected="true"
              >
                <i class="fas fa-crown"></i> Pageantry/Contest
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-award-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-award"
                type="button"
                role="tab"
                aria-controls="pills-award"
                aria-selected="false"
              >
                <i class="fas fa-trophy"></i> Awards
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-reality-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-reality"
                type="button"
                role="tab"
                aria-controls="pills-reality"
                aria-selected="false"
              >
                <i class="fas fa-tv"></i> Reality TV
              </button>
            </li>
            <!-- 
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-photo-tab" data-bs-toggle="pill" data-bs-target="#pills-photo" type="button" role="tab" aria-controls="pills-photo" aria-selected="false"><i class="fas fa-images"></i> Photo Contest</button>
                        </li> -->
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <!--Pageantry-->
            <div
              class="tab-pane fade show active"
              id="pills-pageantry"
              role="tabpanel"
              aria-labelledby="pills-pageantry-tab"
            >
              <div class="container">
                <div class="row">
                  <div
                    class="my-4 col-md-6 col-lg-4"
                    v-for="(con, index) in voteContentToShow"
                    :key="con.id"
                  >
                    <div class="card" v-if="index < voteContent.length">
                      <div class="card-img-top">
                        <img
                          :src="voteContent[index].image"
                          alt="card-img"
                          class="w-100"
                        />
                        <div class="px-2 badge">VOTE</div>
                      </div>
                      <div class="card-body">
                        <div class="card-title">
                          {{ voteContent[index].title }}
                        </div>
                        <div class="card-text">
                          <p class="card-text card-text-after">
                            <i class="bi bi-person-plus-fill"></i>:
                            {{ voteContent[index].contestants.length }}
                            Contestant(s)
                          </p>
                          <p></p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 36 36"
                            class="mr-2 iconify"
                            data-icon="clarity:date-solid"
                            data-inline="false"
                            style="transform: rotate(360deg)"
                          >
                            <path
                              fill="currentColor"
                              d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
                              class="clr-i-solid clr-i-solid-path-1"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                              class="clr-i-solid clr-i-solid-path-2"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                              class="clr-i-solid clr-i-solid-path-3"
                            ></path>
                            <path fill="none" d="M0 0h36v36H0z"></path></svg
                          >: STARTS: 00:00 - {{ voteContent[index].startdate }}
                          <p></p>
                          <p class="pl-4">
                            &nbsp;&nbsp;&nbsp;&nbsp;ENDS: 23:59 -
                            {{ voteContent[index].closedate }}
                          </p>
                        </div>
                        <div class="mt-3 link-container">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <router-link
                              :to="'/voting-content/' + voteContent[index].id"
                              class="px-3 py-2"
                              >VIEW CONTEST</router-link
                            >
                            <p style="text-transform: uppercase">
                              {{ voteContent[index].type }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                <div class="p-5" v-if="isLoadingPageantry">
                  <LoaderVue />
                </div>

                  <div
                    v-if="
                      ((voteContentToShow < voteContent.length ||
                      voteContent.length > voteContentToShow) && (!isLoadingPageantry))
                    "
                    class="col-lg-12 text-center"
                  >
                    <button
                      class="btnLoadMore"
                      @click="loadPageantry"
                      type="button"
                    >
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!--Award-->
            <div
              class="tab-pane fade"
              id="pills-award"
              role="tabpanel"
              aria-labelledby="pills-award-tab"
            >
              <div class="container">
                <div class="row">
                  <div
                    class="my-4 col-md-6 col-lg-4"
                    v-for="(con, index) in awardContentToShow"
                    :key="con.id"
                  >
                    <div class="card" v-if="index < awardContent.length">
                      <div class="card-img-top">
                        <img
                          :src="awardContent[index].image"
                          alt="card-img"
                          class="w-100"
                        />
                        <div class="px-2 badge">VOTE</div>
                      </div>
                      <div class="card-body">
                        <div class="card-title">
                          {{ awardContent[index].title }}
                        </div>
                        <div class="card-text">
                          <p class="card-text card-text-after">
                            <i class="bi bi-person-plus-fill"></i>:
                            {{ awardContent[index].awardCategories.length }}
                            Categories(s)
                          </p>
                          <p></p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 36 36"
                            class="mr-2 iconify"
                            data-icon="clarity:date-solid"
                            data-inline="false"
                            style="transform: rotate(360deg)"
                          >
                            <path
                              fill="currentColor"
                              d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
                              class="clr-i-solid clr-i-solid-path-1"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                              class="clr-i-solid clr-i-solid-path-2"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                              class="clr-i-solid clr-i-solid-path-3"
                            ></path>
                            <path fill="none" d="M0 0h36v36H0z"></path></svg
                          >: STARTS: 00:00 - {{ awardContent[index].startdate }}
                          <p></p>
                          <p class="pl-4">
                            &nbsp;&nbsp;&nbsp;&nbsp;ENDS: 23:59 -
                            {{ awardContent[index].closedate }}
                          </p>
                        </div>
                        <div class="mt-3 link-container">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <router-link
                              :to="'/award-content/' + awardContent[index].id"
                              class="px-3 py-2"
                              >VIEW CATEGORY</router-link
                            >
                            <p style="text-transform: uppercase">
                              {{ awardContent[index].type }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                <div class="p-5" v-if="isLoadingAward">
                  <LoaderVue />
                </div>

                  <div
                    v-if="
                      ((awardContentToShow < awardContent.length ||
                      awardContent.length > awardContentToShow) && (!isLoadingAward))
                    "
                    class="col-lg-12 text-center"
                  >
                    <button
                      class="btnLoadMore"
                      @click="loadAward"
                      type="button"
                    >
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!--Reality TV-->
            <div
              class="tab-pane fade"
              id="pills-reality"
              role="tabpanel"
              aria-labelledby="pills-reality-tab"
            >
              <div class="container">
                <div class="row">
                  <div class="col-md-4 py-2">
                    <div class="card">
                      <img
                        src="@/assets/images/voting-img2.jpg"
                        ondragstart="return false;"
                        class="card-img-top"
                      />
                      <div class="card-body">
                        <p class="card-text main-text">
                          <i class="bi bi-award-fill"></i> : Title Here
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-credit-card-fill"></i> : Paid
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-person-plus-fill"></i> : 9
                          Participant(s)
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-calendar3"></i> : Start(00:00 -
                          27-01-2022)<br />
                          End(23:59 - 27-02-2022)
                        </p>
                        <a href="#" class="btn-view-contest">View Details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 py-2">
                    <div class="card">
                      <img
                        src="@/assets/images/voting-img2.jpg"
                        ondragstart="return false;"
                        class="card-img-top"
                      />
                      <div class="card-body">
                        <p class="card-text main-text">
                          <i class="bi bi-award-fill"></i> : Title Here
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-credit-card-fill"></i> : Paid
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-person-plus-fill"></i> : 9
                          Participant(s)
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-calendar3"></i> : Start(00:00 -
                          27-01-2022)<br />
                          End(23:59 - 27-02-2022)
                        </p>
                        <a href="#" class="btn-view-contest">View Details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 py-2">
                    <div class="card">
                      <img
                        src="@/assets/images/voting-img2.jpg"
                        ondragstart="return false;"
                        class="card-img-top"
                      />
                      <div class="card-body">
                        <p class="card-text main-text">
                          <i class="bi bi-award-fill"></i> : Title Here
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-credit-card-fill"></i> : Paid
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-person-plus-fill"></i> : 9
                          Participant(s)
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-calendar3"></i> : Start(00:00 -
                          27-01-2022)<br />
                          End(23:59 - 27-02-2022)
                        </p>
                        <a href="#" class="btn-view-contest">View Details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 text-center">
                    <button class="btnLoadMore" type="button">Load More</button>
                  </div>
                </div>
              </div>
            </div>
            <!--Photo Contest-->
            <!-- <div class="tab-pane fade" id="pills-photo" role="tabpanel" aria-labelledby="pills-photo-tab">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-img3.jpg" ondragstart="return false;" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-award-fill"></i> : Title Here</p>
                                                <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : Paid</p>
                                                <p class="card-text card-text-after"><i class="bi bi-person-plus-fill"></i> : 3 Participant(s)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-calendar3"></i> : Start(00:00 - 27-01-2022)<br> End(23:59 - 27-02-2022)</p>
                                                <a href="#" class="btn-view-contest">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Service Content Vote Ends-->
  <elfrique-footer />
</template>

<script>
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import VoteService from "../service/vote.service";
  import LoaderVue from "./components/Loader.vue";

  import AOS from "aos";
  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      LoaderVue,
    },
    data() {
      return {
        voteContent: "",
        awardContent: "",
        voteContentToShow: 6,
        totalvoteContent: 0,
        awardContentToShow: 6,
        totalAwardContent: 0,
        isLoadingPageantry: true,
        isLoadingAward: true,
      };
    },

    created() {
      VoteService.getAllContests().then((response) => {
        this.voteContent = response.data.voteContests;
        this.totalvoteContent = this.voteContent.length;
        this.isLoadingPageantry = false;
      });
      VoteService.getAllAwards().then((response) => {
        this.awardContent = response.data.awards;
        this.totalAwardContent = this.awardContent.length;
        this.isLoadingAward = false;
      });
    },

    methods: {
      loadPageantry() {
        this.isLoadingPageantry = true;
        setTimeout(() => {
          this.isLoadingPageantry = false;
          this.voteContentToShow += 3;
        }, 4000);
      },

      loadAward() {
        this.isLoadingAward = true;
        setTimeout(() => {
          this.isLoadingAward = false;
          this.awardContentToShow += 3;
        }, 4000);
      },

      getContest(contest) {
        this.$store.dispatch("vote/getSingleContest", contest).then(() => {
          //console.log(this.$store.state.vote.voteContent)
          /* this.$router.push('/voting-content'); */
        });
      },
      getAllContests() {
        console.log("Adding 10 more data results");
        this.busy = true;

        VoteService.getAllContests().then((response) => {
          const append = response.data.voteContests.slice(
            this.voteContent.length,
            this.voteContent.length + this.limit
          );
          this.voteContent = this.voteContent.concat(append);
          this.busy = false;
          //this.voteContent = response.data.voteContests;
          //console.log(this.voteContent);
        });
      },
    },

    mounted() {
      window.scrollTo(0, 0);
      AOS.init();
    },
  };
</script>
