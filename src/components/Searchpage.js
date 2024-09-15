import React from 'react'
import { ReactComponent as Back} from '../image/Back.svg';
import './CSS/Firstpage.css';
import { useNavigate } from "react-router-dom";

const Searchpage = () => {
    
     const navigate = useNavigate();

  return (
    <div>
    
      <div className='container1'>
        <div className='search1'>
             <button onClick={()=>navigate(-1)}><Back/></button> 
             
             Fiction
        </div>
        <div className='searchboxx'>
                <form class="app-search d-none d-md-block">
                    <div class="position-relative">
                        <input type="text" class="form-control" placeholder="Search..." autocomplete="off" id="search-options" value=""/>
                        <span class="mdi mdi-magnify search-widget-icon"></span>
                        <span class="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
                    </div>
                    <div class="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                        <div data-simplebar style="max-height: 320px;">
                            <div class="dropdown-header">
                                <h6 class="text-overflow text-muted mb-0 text-uppercase">Recent Searches</h6>
                            </div>

                            <div class="dropdown-item bg-transparent text-wrap">
                                <a href="index.html" class="btn btn-soft-secondary btn-sm rounded-pill">how to setup <i class="mdi mdi-magnify ms-1"></i></a>
                                <a href="index.html" class="btn btn-soft-secondary btn-sm rounded-pill">buttons <i class="mdi mdi-magnify ms-1"></i></a>
                            </div>
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
                            </div>

                            <a href="" class="dropdown-item notify-item">
                                <i class="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                                <span>Analytics Dashboard</span>
                            </a>

                            <a href="" class="dropdown-item notify-item">
                                <i class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                                <span>Help Center</span>
                            </a>

                          
                            <a href="" class="dropdown-item notify-item">
                                <i class="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                                <span>My account settings</span>
                            </a>

                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                            </div>

                            <div class="notification-list">
                                <a href="" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img src="assets/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div class="flex-grow-1">
                                            <h6 class="m-0">Angela Bernier</h6>
                                            <span class="fs-11 mb-0 text-muted">Manager</span>
                                        </div>
                                    </div>
                                </a>
                               <a href="" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img src="assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div class="flex-grow-1">
                                            <h6 class="m-0">David Grasso</h6>
                                            <span class="fs-11 mb-0 text-muted">Web Designer</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img src="assets/images/users/avatar-5.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div class="flex-grow-1">
                                            <h6 class="m-0">Mike Bunch</h6>
                                            <span class="fs-11 mb-0 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="text-center pt-3 pb-1">
                            <a href="pages-search-results.html" class="btn btn-primary btn-sm">View All Results <i class="ri-arrow-right-line ms-1"></i></a>
                        </div>
                    </div>
                </form>
        </div>
        
            <div className=''>
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text">THE OLD MAN AND THE SEA</p>
                        <p class="card-text">Charles DickensA</p>

                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text">The Belal Stone</p>
                        <p class="card-text">R.D Brady</p>

                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text">REACTION - THE
                        END OF IRON AGE</p>
                        <p class="card-text">Seth M BakerA</p>

                    </div>
                </div>
            </div>
      </div>
    </div>

  )
}

export default Searchpage
