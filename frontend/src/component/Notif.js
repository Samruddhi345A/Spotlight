import React from 'react';
import '../css/Nf.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Notif() {
  
	return (
		<div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body bg-primary text-white mailbox-widget pb-0">
                    <h2 class="text-white pb-3">Your Mailbox</h2>
                    <ul class="nav nav-tabs custom-tab border-bottom-0 mt-4" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="inbox-tab" data-toggle="tab" aria-controls="inbox" href="#inbox" role="tab" aria-selected="true">
                                <span class="d-block d-md-none"><i class="ti-email"></i></span>
                                <span class="d-none d-md-block"> INBOX</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="sent-tab" data-toggle="tab" aria-controls="sent" href="#sent" role="tab" aria-selected="false">
                                <span class="d-block d-md-none"><i class="ti-export"></i></span>
                                <span class="d-none d-md-block">SENT</span>
                            </a>
                        </li>
                       
                    </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade active show" id="inbox" aria-labelledby="inbox-tab" role="tabpanel">
                        <div>
                            <div class="row p-4 no-gutters align-items-center">
                                
                                
                                    <ul class="list-inline dl mb-0 float-left float-md-right">
                                       
                                        <li class="list-inline-item text-danger">
                                            <a href="#/">
                                                <button class="btn btn-circle btn-danger text-white" href="javascript:void(0)">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                                <span class="ml-2 font-normal text-dark">Delete</span>
                                            </a>
                                        </li>
                                    </ul>
                              
                            </div>
                            
                            <div class="table-responsive">
                                <table class="table email-table no-wrap table-hover v-middle mb-0 font-14">
                                    <tbody>
                                        
                                        <tr>
                                            
                                            <td class="pl-3">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="cst1" />
                                                    <label class="custom-control-label" for="cst1">&nbsp;</label>
                                                </div>
                                            </td>
                                            
                                            <td><i class="fa fa-star text-warning"></i></td>
                                            <td>
                                                <span class="mb-0 text-muted">Hritik Roshan</span>
                                            </td>
                                            
                                            <td>
                                                <a class="link" href="javascript: void(0)">
                                                    <span class="badge badge-pill text-white font-medium badge-danger mr-2">Work</span>
                                                    <span class="text-dark">Lorem ipsum perspiciatis-</span>
                                                </a>
                                            </td>
                                            
                                            <td><i class="fa fa-paperclip text-muted"></i></td>
                                            
                                            <td class="text-muted">May 13</td>
                                        </tr>
                                        
                                        <tr>
                                            
                                            <td class="pl-3">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="cst2" />
                                                    <label class="custom-control-label" for="cst2">&nbsp;</label>
                                                </div>
                                            </td>
                                            
                                            <td><i class="fa fa-star"></i></td>
                                            
                                            <td>
                                                <span class="mb-0 text-muted">Genelia Roshan</span>
                                            </td>
                                            
                                            <td>
                                                <a class="link" href="javascript: void(0)">
                                                    <span class="badge badge-pill text-white font-medium badge-info mr-2">Business</span>
                                                    <span class="text-dark">Inquiry about license for Admin </span>
                                                </a>
                                            </td>
                                            
                                            <td><i class="fa fa-paperclip text-muted"></i></td>
                                            
                                            <td class="text-muted">May 13</td>
                                        </tr>
                                        
                                        <tr>
                                            
                                            <td class="pl-3">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="cst3" />
                                                    <label class="custom-control-label" for="cst3">&nbsp;</label>
                                                </div>
                                            </td>
                                            
                                            <td><i class="fa fa-star text-warning"></i></td>
                                            
                                            <td class="user-name max-texts">
                                                <span class="mb-0 text-muted font-light">Ritesh Deshmukh</span>
                                            </td>
                                            
                                            <td>
                                                <a class="link" href="javascript: void(0)">
                                                    <span class="badge badge-pill text-white font-medium badge-warning mr-2">Friend</span>
                                                    <span class="font-light text-dark">Bitbucket (commit Pushed) by Ritesh</span>
                                                </a>
                                            </td>
                                            
                                            <td><i class="fa fa-paperclip text-muted"></i></td>
                                            
                                            <td class="text-muted font-light">May 13</td>
                                        </tr>
                                        
                                        <tr class="">
                                            
                                            <td class="pl-3">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="cst4" />
                                                    <label class="custom-control-label" for="cst4">&nbsp;</label>
                                                </div>
                                            </td>
                                            
                                            <td><i class="fa fa-star"></i></td>
                                            
                                            <td>
                                                <span class="mb-0 text-muted font-light">Akshay Kumar</span>
                                            </td>
                                            
                                            <td>
                                                <a class="link" href="javascript: void(0)">
                                                    <span class="badge badge-pill text-white font-medium badge-info mr-2">Work</span><span class="font-light text-dark">Perspiciatis unde omnis- iste Lorem ipsum</span>
                                                </a>
                                            </td>
                                            
                                            <td><i class="fa fa-paperclip text-muted"></i></td>
                                            
                                            <td class="text-muted font-light">May 9</td>
                                        </tr>
                                        
                                        <tr class="">
                                            
                                            <td class="pl-3">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="cst5" />
                                                    <label class="custom-control-label" for="cst5">&nbsp;</label>
                                                </div>
                                            </td>
                                            
                                            <td><i class="fa fa-star"></i></td>
                                            
                                            <td>
                                                <span class="mb-0 text-muted font-light">John Abraham</span>
                                            </td>
                                            
                                            <td>
                                                <a class="link" href="javascript: void(0)">
                                                    <span class="badge badge-pill text-white font-medium badge-success mr-2">Work</span> <span class="font-light text-dark">Lorem ipsum perspiciatis- unde omnis</span>
                                                </a>
                                            </td>
                                            
                                            <td><i class="fa fa-paperclip text-muted"></i></td>
                                            
                                            <td class="text-muted font-light">Mar 10</td>
                                        </tr>
                                        
                                        <tr class="">
                                            
                                            <td class="pl-3">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="cst6" />
                                                    <label class="custom-control-label" for="cst6">&nbsp;</label>
                                                </div>
                                            </td>
                                            
                                            <td><i class="fa fa-star text-warning"></i></td>
                                            
                                            <td>
                                                <span class="mb-0 text-muted font-light">Akshay Kumar</span>
                                            </td>
                                            
                                            <td>
                                                <a class="link" href="javascript: void(0)">
                                                    <span class="badge badge-pill text-white font-medium badge-success mr-2">Work</span> <span class="font-light text-dark">Lorem ipsum perspiciatis - unde</span>
                                                </a>
                                            </td>
                                            
                                            <td><i class="fa fa-paperclip text-muted"></i></td>
                                            
                                            <td class="text-muted font-light">Mar 09</td>
                                        </tr>
                                        
                                        <tr class="">
                                            
                                            <td class="pl-3">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="cst7" />
                                                    <label class="custom-control-label" for="cst7">&nbsp;</label>
                                                </div>
                                            </td>
                                            
                                            <td><i class="fa fa-star text-warning"></i></td>
                                            
                                            <td>
                                                <span class="mb-0 text-muted font-light">Hanna Gover</span>
                                            </td>
                                            
                                            <td>
                                                <a class="link" href="javascript: void(0)">
                                                    <span class="badge badge-pill text-white font-medium badge-danger mr-2">Work</span><span class="font-light text-dark"> Unde omnis Lorem ipsum perspiciatis</span>
                                                </a>
                                            </td>
                                            
                                            <td><i class="fa fa-paperclip text-muted"></i></td>
                                            
                                            <td class="text-muted font-light">Mar 09</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="sent" aria-labelledby="sent-tab" role="tabpanel">
                        <div class="row p-3 text-dark">
                            <div class="col-md-6">
                                <h3 class="font-light">Lets check profile</h3>
                                <h4 class="font-light">you can use it with the small code</h4>
                            </div>
                            <div class="col-md-6 text-right">
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="spam" aria-labelledby="spam-tab" role="tabpanel">
                        <div class="row p-3 text-dark">
                            <div class="col-md-6">
                                <h3 class="font-light">Come on you have a lot message</h3>
                                <h4 class="font-light">you can use it with the small code</h4>
                            </div>
                            <div class="col-md-6 text-right">
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="delete" aria-labelledby="delete-tab" role="tabpanel">
                        <div class="row p-3 text-dark">
                            <div class="col-md-6">
                                <h3 class="font-light">Just do Settings</h3>
                                <h4 class="font-light">you can use it with the small code</h4>
                            </div>
                            <div class="col-md-6 text-right">
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

		</div>
	);
}
export default Notif;
