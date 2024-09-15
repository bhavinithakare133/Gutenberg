import React from 'react'
import './CSS/Firstpage.css';
import { ReactComponent as Fiction} from '../image/Fiction.svg';
import { ReactComponent as Next} from '../image/Next.svg';
import { ReactComponent as Drama} from '../image/Drama.svg';
import  { ReactComponent as Humor}from '../image/Humour.svg';
import { ReactComponent as Politics} from '../image/Politics.svg';
import { ReactComponent as Philosophy} from '../image/Philosophy.svg';
import  { ReactComponent as History}  from '../image/History.svg';
import { ReactComponent as Adventure} from '../image/Adventure.svg';
import { useNavigate } from "react-router-dom";
 import { Button } from 'bootstrap';

const First_page = () => {
    const navigate = useNavigate();
    

  return (
    <div>
        <div className='container1' >
            <div className='topfloor'>
                <h1 className='headguten'>Gutenberg Project</h1>
                <p className='paraguten'>A social cataloging website that allows you to freely search its database of books, annotations,
                and reviews</p>
            </div>
        <div>
            <div class="row gy-4">
                <div class="col-xxl-3 col-md-6  ">
                <Button onClick={() => navigate("/Searchpage")}
                  >
                <div className='generecard'>
                        <div className='roomflex'>
                            <div className='roomflex1'>
                                <div className='icontext'><Fiction  className='imgnew' width={20} height={50} marginRight={10}/></div>
                                 <div className='textt'>FICTION</div>
                            </div>
                            <div className='imgnew'><Next/></div>
                         </div> 
                         
                    </div>
                    </Button>
                </div>
                <div class="col-xxl-3 col-md-6">
                    <div className='generecard' >
                        <div className='roomflex'>
                            <div className='roomflex1'>
                                <div className='icontext'><Drama className='imgnew' width={20} height={50} marginRight={10}/></div>
                                 <div className='textt'>DRAMA</div>
                            </div>
                            <div className='imgnew'><Next/></div>
                         </div> 
                    </div>
                </div>
                <div class="col-xxl-3 col-md-6">
                    <div className='generecard' >
                        <div className='roomflex'>
                            <div className='roomflex1'>
                                <div className='icontext'><Humor className='imgnew' width={20} height={50} marginRight={10}/></div>
                                 <div className='textt'>HUMOR</div>
                            </div>
                            <div className='imgnew'><Next/></div>
                         </div> 
                    </div>
                </div>
                <div class="col-xxl-3 col-md-6">
                    <div className='generecard' >
                        <div className='roomflex'>
                            <div className='roomflex1'>
                                <div className='icontext'><Politics className='imgnew' width={20} height={50} marginRight={10}/></div>
                                 <div className='textt'>POLITICS</div>
                            </div>
                            <div className='imgnew'><Next/></div>
                         </div> 
                    </div>                   
                </div>
                <div class="col-xxl-3 col-md-6">
                    <div className='generecard' >
                        <div className='roomflex'>
                            <div className='roomflex1'>
                                <div className='icontext'><Philosophy className='imgnew' width={20} height={50} marginRight={10}/></div>
                                 <div className='textt'>PHILOSOPHY</div>
                            </div>
                            <div className='imgnew'><Next/></div>
                         </div> 
                    </div>
                </div>
                <div class="col-xxl-3 col-md-6">
                    <div className='generecard' >
                        <div className='roomflex'>
                            <div className='roomflex1'>
                                <div className='icontext'><History className='imgnew' width={20} height={50} marginRight={10}/></div>
                                 <div className='textt'>HISTORY</div>
                            </div>
                            <div className='imgnew'><Next/></div>
                         </div> 
                    </div>
                </div>
                <div class="col-xxl-3 col-md-6">
                <div className='generecard' >
                        <div className='roomflex'>
                            <div className='roomflex1'>
                                <div className='icontext'><Adventure  className='imgnew' width={20} height={50} marginRight={10}/></div>
                                 <div className='textt'>ADVENTURE</div>
                            </div>
                            <div className='imgnew'><Next/></div>
                         </div> 
                    </div>
                 </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default First_page
