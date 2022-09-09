<template>
    <title>Travel And Tour Management Page | Elfrique – Complete Event Management System</title>
    <elfrique-header/>

    <!-- Tour New Added -->
        <section class="Tour">
            <div class="container-fluid">
                <div class="row justify-content-center mt-5">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="text">
                                    <p>
                                        American 
                                        <span>
                                            <i class="bi bi-arrow-left-right"></i>
                                        </span>
                                        <span class="niger">
                                            Nigeria
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="text">
                                    <p>
                                        Sep 5, 2022 - Sep 6, 2022
                                    </p>
                                </div>
                            </div>
                            <div  class="col-md-3">
                                <div class="text">
                                    <p>
                                        1 Adult, Economy
                                    </p>
                                </div>
                            </div>
                            <div  class="col-md-3">
                                <div class="modify">
                                    <button  type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Modify <i class="bi bi-pen"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                </div>
            </div>
        </section>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="search-travel-house-div">
                        <div class="search-travel-section">
                            <div class="tab-content" id="nav-tabContent">
                                <!--Flight-->
                                <div class="tab-pane tabOne fade show active" id="nav-flight" role="tabpanel" aria-labelledby="nav-flight-tab">
                                    <form>
                                        <div class="row mb-3">
                                            <div class="col-lg-3">
                                                <select>
                                                    <option>Round Trip</option>
                                                    <option>One-way</option>
                                                    <option>Multi-city</option>
                                                </select>
                                            </div>
                                            <div class="col-lg-3">
                                                <select>
                                                    <option>Economy</option>
                                                    <option>Premium Economy</option>
                                                    <option>Business</option>
                                                    <option>First Class</option>
                                                </select>
                                            </div>
                                            <div class="col-lg-2">
                                                <label class="label-number">Adult (Above 12 years)</label>
                                                <input class="input-number" type="number">
                                            </div>
                                            <div class="col-lg-2">
                                                <label class="label-number">Children (2-12 years)</label>
                                                <input class="input-number" type="number">
                                            </div>
                                            <div class="col-lg-2">
                                                <label class="label-number">Infant (Below 2 years)</label>
                                                <input class="input-number" type="number">
                                            </div>
                                        </div>
                                        <div class="row justify-content-center">
                                            <div class="col-md-6">
                                                <div class="row g-1 justify-content-center">
                                                    <div class="col-lg-1 icon-to-fro text-center">
                                                        <i class="bi bi-arrow-left-right"></i>
                                                    </div>
                                                    <div class="col-lg-6 div-input">
                                                        <label>From</label>
                                                        <input type="text" placeholder="City or Flightport">
                                                    </div>
                                                    <div class="col-lg-6 div-input">
                                                        <label>To</label>
                                                        <input type="text" placeholder="City or Flightport">
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row g-1">
                                                    <div class="col-lg-6 div-input">
                                                        <label>Depart</label>
                                                        <input type="date">
                                                    </div>
                                                    <div class="col-lg-6 div-input">
                                                        <label>Return</label>
                                                        <input type="date">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-lg-12 text-center mt-2 py-2">
                                                        <button type="submit">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    <!-- Tour New Added Ended -->

    <!-- Filter Added -->
        <section class="filter">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="clear" style="95%">
                                    <div class="text">
                                        <p>
                                            Filter 
                                            <span>
                                                Clear all
                                            </span>
                                        </p>
                                    </div>
                                    <div class="left">
                                        <p>
                                            Price 
                                            <span>
                                                Clear <i class="bi bi-sort-up-alt"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="grop">
                                        <div class="form-group">
                                            <input type="range" class="form-control-range" id="formControlRange"  min="1" max="100" value="50">
                                        </div>
                                        <div class="nFlighta">
                                            ₦1.5000,000
                                        </div>
                                    </div>
                                    <div class="left grop">
                                        <p>
                                            Payment Plan
                                            <span>
                                                Clear <i class="bi bi-sort-up-alt"></i>
                                            </span>
                                        </p>
                                        <div class="form-check py-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                Pay Small Small
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                None
                                            </label>
                                        </div>
                                    </div>
                                    <div class="left grop">
                                        <p>
                                            FlightLINE
                                            <span>
                                                Clear <i class="bi bi-sort-up-alt"></i>
                                            </span>
                                        </p>
                                        <div class="form-check py-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                Multiple  
                                                <span class="move">
                                                    from ₦1,642,955
                                                </span>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                Flight France
                                                <span>
                                                    from ₦1,840,250
                                                </span>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                KLM Royal Dutch Flightlines
                                                <span>
                                                    from ₦1,848,873
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="left">
                                        <p>
                                            Flexibility
                                            <span>
                                                <i class="bi bi-arrows-expand"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="range-div">
                                                    <div class="btn-div">
                                                        <img src="@/assets/images/plane.png" draggable="false" alt="logo">
                                                        <p>Flight To China</p>
                                                    </div>
                                                    <div class="line">
                                                        ₦7,864,032
                
                                                    </div>
                                                    <div class="linee">
                                                        ₦8,864,032
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="range-div">
                                                    <div class="btn-div">
                                                        <img src="@/assets/images/plane.png" draggable="false" alt="logo">
                                                        <p>Flight To France</p>
                                                    </div>
                                                    <div class="line">
                                                        ₦1,864,032
                                                    </div>
                                                    <div class="linee">
                                                        ₦2,864,032
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="range-div">
                                                    <div class="btn-div">
                                                        <img src="@/assets/images/plane.png" draggable="false" alt="logo">
                                                        <p>Flight To London</p>
                                                    </div>
                                                    <div class="line">
                                                        ₦3,864,032
                                                    </div>
                                                    <div class="linee">
                                                        ₦4,864,032
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="range-div">
                                                    <div class="btn-div">
                                                        <img src="@/assets/images/plane.png" draggable="false" alt="logo">
                                                        <p>Flight To London</p>
                                                    </div>
                                                    <div class="line">
                                                        ₦3,864,032
                                                    </div>
                                                    <div class="linee">
                                                        ₦4,864,032
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="sort">
                                            <nav>
                                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button class="nav-link close">
                                                        <span>
                                                            Sort By:
                                                        </span>
                                                    </button>
                                                    <button class="nav-link tabs-button active" id="nav-Cheapest-tab" data-bs-toggle="tab" data-bs-target="#nav-Cheapest" type="button" role="tab" aria-controls="nav-Cheapest" aria-selected="false">
                                                    <i class="fa fa-file-invoice"></i><span>Cheapest</span></button>
                                                    <button class="nav-link tabs-button" id="nav-hotel-tab" data-bs-toggle="tab" data-bs-target="#nav-hotel" type="button" role="tab" aria-controls="nav-hotel" aria-selected="false">
                                                    <i class="fa fa-file-invoice"></i><span>Fastest</span></button>
                                                    <button class="nav-link tabs-button" id="nav-visa-tab" data-bs-toggle="tab" data-bs-target="#nav-visa" type="button" role="tab" aria-controls="nav-visa" aria-selected="false"><i class="fa fa-file-invoice"></i> <span>Recommended</span></button>
                                                </div>
                                            </nav>
                                            <div class="tab-content" id="nav-tabContent">
                                                <!--Cheapest-->
                                                <div class="tab-pane tabOne fade show active" id="nav-Cheapest" role="tabpanel" aria-labelledby="nav-Cheapest-tab">
                                                    <div class="learnt">
                                                        <div class="row">
                                                            <div class="col-md-1">
                                                                <div class="pull">
                                                                    <img src="@/assets/images/AF.gif" draggable="false" >
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="pull">
                                                                    <p>
                                                                        KLM Royal Dutch Airlines
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        22:10 (LOS)
                                                                    </p>
                                                                    <p>
                                                                        Lagos
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        10h 5m
                                                                    </p>
                                                                    <p>
                                                                        1 Stop
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        08:10 (LCY)
                                                                    </p>
                                                                    <p>
                                                                        London
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        ₦1,864,032
                                                                    </p>
                                                                    <button type="button" class="lenn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                                        View
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="learnt">
                                                        <div class="row">
                                                            <div class="col-md-1">
                                                                <div class="pull">
                                                                    <img src="@/assets/images/paysmallsmall.png" draggable="false" >
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="pull">
                                                                    <p>
                                                                        KLM Royal Dutch Airlines
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        22:10 (LOS)
                                                                    </p>
                                                                    <p>
                                                                        Lagos
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        10h 5m
                                                                    </p>
                                                                    <p>
                                                                        1 Stop
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        08:10 (LCY)
                                                                    </p>
                                                                    <p>
                                                                        London
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        ₦1,864,032
                                                                    </p>
                                                                    <button type="button" class="lenn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                                        View
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--Fastest-->
                                                <div class="tab-pane tabOne fade" id="nav-hotel" role="tabpanel" aria-labelledby="nav-hotel-tab">
                                                    <div class="learnt">
                                                        <div class="row">
                                                            <div class="col-md-1">
                                                                <div class="pull">
                                                                    <img src="@/assets/images/AF.gif" draggable="false" >
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="pull">
                                                                    <p>
                                                                        KLM Royal Dutch Airlines
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        22:10 (LOS)
                                                                    </p>
                                                                    <p>
                                                                        Abuja
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        11h 5m
                                                                    </p>
                                                                    <p>
                                                                        1 Stop
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        09:10 (LCY)
                                                                    </p>
                                                                    <p>
                                                                        Chana
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        ₦2,864,032
                                                                    </p>
                                                                    <button type="button" class="lenn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                                        View
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="learnt">
                                                        <div class="row">
                                                            <div class="col-md-1">
                                                                <div class="pull">
                                                                    <img src="@/assets/images/paysmallsmall.png" draggable="false" >
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="pull">
                                                                    <p>
                                                                        KLM Royal Dutch Airlines
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        22:10 (LOS)
                                                                    </p>
                                                                    <p>
                                                                        Lagos
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        10h 5m
                                                                    </p>
                                                                    <p>
                                                                        1 Stop
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        08:10 (LCY)
                                                                    </p>
                                                                    <p>
                                                                        London
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        ₦1,864,032
                                                                    </p>
                                                                    <button type="button" class="lenn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                                        View
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--e-Reconded-->
                                                <div class="tab-pane fade" id="nav-visa" role="tabpanel" aria-labelledby="nav-visa-tab">
                                                    <div class="learnt">
                                                        <div class="row">
                                                            <div class="col-md-1">
                                                                <div class="pull">
                                                                    <img src="@/assets/images/AF.gif" draggable="false" >
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="pull">
                                                                    <p>
                                                                        KLM Royal Dutch Airlines
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        22:10 (LOS)
                                                                    </p>
                                                                    <p>
                                                                        Kaduna
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        11h 5m
                                                                    </p>
                                                                    <p>
                                                                        1 Stop
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        08:10 (LCY)
                                                                    </p>
                                                                    <p>
                                                                        France
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        ₦1,864,032
                                                                    </p>
                                                                    <button style=" background-color:#305d21 ;border:none;  padding: 5px 20px 5px 20px; border-radius: 8px; margin-top:10px; color: #fff; font-size: 14px;" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                                        View
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="learnt">
                                                        <div class="row">
                                                            <div class="col-md-1">
                                                                <div class="pull">
                                                                    <img src="@/assets/images/paysmallsmall.png" draggable="false" >
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="pull">
                                                                    <p>
                                                                        KLM Royal Dutch Airlines
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        22:10 (LOS)
                                                                    </p>
                                                                    <p>
                                                                        Lagos
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        10h 5m
                                                                    </p>
                                                                    <p>
                                                                        1 Stop
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        08:10 (LCY)
                                                                    </p>
                                                                    <p>
                                                                        London
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="pull">
                                                                    <p>
                                                                        ₦1,864,032
                                                                    </p>
                                                                    <button style=" background-color:#305d21 ;border:none;  padding: 5px 20px 5px 20px; border-radius: 8px; margin-top:10px; color: #fff; font-size: 14px;" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                                        View
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!-- Filter Added Ended -->

    <!-- Modal Lastest -->
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog death">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> Departure flight : Lagos - London</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="teuday">
                                        <p>
                                            Tue, Sep 06
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-1">
                                    <div>
                                        <img src="@/assets/images/paysmallsmall.png" draggable="false" alt="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="lent">
                                        <p>
                                            <b>
                                                23:30 - 06:55
                                            </b>
                                        </p>
                                        <p>
                                            Lagos (Murtala Muhammed International Airport) (LOS) - Paris (Charles De Gaulle) (CDG)
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div>
                                        <p>
                                            <b>
                                                Economy
                                            </b>
                                        </p>
                                        <p>
                                            6h 25m
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="summary">
                                        <div class="fare">
                                            <h1>
                                                Fare Summary
                                            </h1>
                                            <div class="adult">
                                                <p>
                                                Traveler(s) 
                                                <span>
                                                    ₦1,861,919
                                                </span>
                                                </p>
                                                <p class="clo">
                                                    Adults (x1)
                                                </p>
                                            </div>
                                            <div class="adult">
                                                <p class="text-center to">
                                                    Total
                                                    <span>
                                                        ₦1,861,919
                                                    </span>
                                                </p>
                                                <p class="clo">

                                                </p>
                                            </div>
                                            <div class="adult">
                                                <p>
                                                    *Non Refundable.
                                                </p>
                                                <p>
                                                    *Total fare displayed above has been rounded off and may thus show a slight difference.
                                                </p>
                                                <button>
                                                    Book
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    <!-- Modal Lastest-Ends -->

    <elfrique-newsletter/>

    <elfrique-footer/>
</template>
<style scoped src="@/assets/css/travelandtour.css"></style>
<script>
    import Header from './elfrique-header.vue'
    import Newsletter from './elfrique-newsletter.vue'
    import Footer from './elfrique-footer.vue'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-newsletter':Newsletter,
      'elfrique-footer':Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>