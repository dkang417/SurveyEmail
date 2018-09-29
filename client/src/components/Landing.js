import React from 'react';

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>
                Emaily
            </h2>
            <h6 className="blue-text text-darken-2">
                An App to collect feedback from your users
            </h6>


    <div className="row">

                <div className="col m6 s12">
                <i class="large material-icons">email</i>            
                    <h4> Gather User Feedback</h4> 
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap  </p>        
        </div>
                <div className="col m6 s12">
                <i class="large material-icons">desktop_mac</i>            
                    <h4> User Experience Focused </h4>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>        
        </div>
        

        </div>
    
        </div>
    );
};

export default Landing;
