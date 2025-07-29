import "./Pocketmoneyright.css";
import ScLogo from '../../../../assets/scLogo.png';
import ModrenLogo from '../../../../assets/modernLogo.png';
 
function Pocketmoneyright() {
    return (
        <div class="container">
            <div class="top">
                <div class="admission-no">Admission No</div>
                <div class="admission-number">123456765432</div>
 
                <div class="student-info">
                    <div class="student-name">Yaswanth Bhimineni</div>
                    <div class="student-label">Student Name</div>
                </div>
 
                <div class="balance">
                    <div class="balance-label">Balance</div>
                    <div class="balance-amount">2,000</div>
                </div>
 
                <div class="bottom-content">
                    <figure>
                        <img src={ScLogo} alt="logo" width="24" height="24" />
                        <img src={ModrenLogo} alt="logo" width="24" height="24" />
                    </figure>
                </div>
            </div>
        </div>
 
    );
}

export default Pocketmoneyright;
 