import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import classes from 'classNames';
import Icon from '@material-ui/core/Icon';

  
class Welcome extends Component{
    

    render(){

        const { match } = this.props;
        
        return(
            <div className='lnf-LPcard-container'>
                <div className='lnf-LPcard-header'>Welcome</div>
                <div className='lnf-LPcard-content'>
                    <div className='lnf-LPcard-content-body'>
                        Lorem ipsum dolor sit amet, ei cum agam recusabo vituperata, mutat suscipit imperdiet ex vim, at cum populo equidem. Audire praesent suscipiantur vix at, illum oratio graeco ei sed. Pro eu wisi percipitur, et torquatos tincidunt mea. At sonet noster percipit his.
                        <br /> <br /> Et mei quando nominavi, at autem disputando quo. Illud appetere mea id, interesset persequeris nam ea. Duis posse nemore at pro, an nibh saperet mel. Nam no perpetua reprimique, civibus lucilius argumentum ut per, bonorum ancillae aliquando in eum. Cu essent feugait appellantur mea, ius meis fierent id.
                        <br /> <br /> Eum iudicabit evertitur prodesset ne, dico commodo pri ut, ea justo munere adipisci mei. Nonumes dissentiunt vis no, eius dignissim in sed. Usu id mandamus intellegam, per movet option impedit cu, eos animal nonumes te. Pri ea dicunt tibique, pro diam autem iusto ne, quo an enim graeci iuvaret. Vel at alia enim, sumo iuvaret suscipit ne pro. Ius et voluptua sensibus.
                        <br /> <br /> Fugit complectitur nec id, sea amet debitis in, te iuvaret utroque eum. Torquatos reprimique nam no, in tota insolens deserunt mel. Et ius assum error principes, an vix eleifend comprehensam. Sea esse sanctus accumsan te.
                        <br /> <br /> Eos eu eligendi definiebas, ea purto fierent postulant eos. Nam ad habemus disputationi, eu putent pericula contentiones nec. Ex explicari referrentur philosophia sea, mea ad voluptua consequuntur, at vix erat libris malorum. Duo in amet verear offendit, at erant graece vulputate eos, eum delectus democritum ex.
                    </div>
                </div>
                <div className='lnf-LPcard-actions'>
                    <Link to={this.props.location.pathname + '/signin'}>
                        <Button color="primary" className={classes.button} >
                            Sign in
                        </Button>
                    </Link>
                    
                    <Link to={this.props.location.pathname + '/signup'}>
                        <Button color="primary" className={classes.button} >
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Welcome;