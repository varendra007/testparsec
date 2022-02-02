import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cp from '../events/cp';
import Ctf from '../events/ctf';
import Hackathon from '../events/hackathon';
import Ascensus from '../events/ascensus';
import Designo from '../events/designo';
import Quiz from '../events/quiz';
import Workshop from '../pages/workshops';
import Schedule from '../pages/schedule';
import Speakers from '../pages/speakers';
import Team from '../pages/team';
// import Overview from '../events/hackathon_overview';
// import Timeline from '../events/hackathon_timeline';
// import Themes from '../events/hackathon_themes';
// import Judges from '../events/hackathon_judges';

import FAQ from '../pages/faq';
import ContactPage from '../pages/contact';
import Home from '../pages/home';
import Sponsers from '../pages/sponsors';
import Travel from '../pages/travel';
import CodeOfConduct from '../pages/codeOfConduct';
import About from '../pages/about';
import Gallery from '../pages/gallery';
import EventLanding from '../pages/eventLanding';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/faq' component={FAQ} />
                <Route path='/sponsors' component={Sponsers} />
                <Route path='/aboutus' component={About} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/codeofconduct' component={CodeOfConduct} />
                <Route path='/travel' component={Travel} />
                <Route path='/contact' component={ContactPage} />
                
                <Route path='/events' component={EventLanding} />
                <Route path='/team' component={Team}/>
                <Route path='/cp' component={Cp}/>
                <Route path='/ctf' component={Ctf}/>
                <Route path='/hackathon' component={Hackathon} />
                {/* <Route path='/hackathon_overview' component={Overview}/> */}
                <Route path='/ascensus' component={Ascensus}/>
                <Route path='/designo' component={Designo}/>
                <Route path='/quiz' component={Quiz} />
                <Route path='/workshops' component={Workshop} />
                <Route path='/schedule' component={Schedule} />
                <Route path='/speakers' component={Speakers} />
                {/* <Route path='/hackathon_timeline' component={Timeline}/>
                <Route path='/hackathon_themes' component={Themes} />
                <Route path='/hackathon_judges' component={Judges} /> */}
                {/* <Route path='/students' component={Students}/> */}
            </Switch>
        </div>
    )
}

export default Routes;
