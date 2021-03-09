import { useState } from "react"
import { Forgot, verifyOTP } from "../../../API"
import showToast from '../../Toast/showToast';
import Toast from '../../Toast/Toast';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function ResetForm(props) {
  const [email,setEmail]=useState("")
  const [otp,setOtp]=useState("")
  const [toastColor,setToastColor]=useState("green")
  const [toastText,setToastText]=useState("")
  const [loading,setLoading]=useState(false)
  const [open, setOpen] = useState(false);
  const history=useHistory()
  
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const submitHandler=async(e)=>{
  e.preventDefault()
  setLoading(true)
  let res=await Forgot({email:email})
  if(res.status===200){
    setLoading(false)
    showToast()
    setToastColor('green')
    setToastText('Check Your Email')
    setTimeout(() => {
      handleOpen()
    }, 2000);
  }
  else{
    console.log(res.response)
    setLoading(false)
    showToast()
    setToastColor('red')
    setToastText(res.response.data.error)
  }
}
//console.log(props,history)
const verify=async(e)=>{
  //e.preventDefault()
  setLoading(true)
  let res=await verifyOTP({email:email,otp:otp})
  if(res.status===200){
    console.log(res)
    setLoading(false)
    showToast()
    setToastColor('green')
    setToastText('Verified')
    setTimeout(() => {
      history.push('/new-password/'+res.data.ResetToken,{token:res.data.ResetToken})
   //   window.location.replace(`/new-password`)
    }, 2000);
   ;
  }
  else{
    console.log(res.response)
    setLoading(false)
    showToast()
    setToastColor('red')
    setToastText("Not Veified")
  }
}
  return (<>
   <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{width:'40%',textAlign:'center',margin:'auto'}}>
            <h2 id="transition-modal-title text-center">Otp</h2>
            <div className='form-group'>
      <div className='input-icon'>
      </div>
      <input
        type='text'
        className='form-control text-center'
        placeholder='9 8 5 7 8 9'
     
        onChange={(e)=>setOtp(e.target.value)}
      />
    </div>
    <button type='submit' onClick={verify} className='btn-primary'>
      Verify OTP
    </button>
          </div>
        </Fade>
      </Modal>
    <form id='#authForm'>
       <Toast color={toastColor} text={toastText}/>
    <div className='content'>
      <h3>Forget Your Password?</h3>
      <p>
        Enter the email associated with your account and we'll send an
        email with instruction to reset your password
      </p>
    </div>
    <div className='form-group'>
      <div className='input-icon'>
        <i className='bx bx-at' />
      </div>
      <input
        type='text'
        className='form-control'
        placeholder='Email Address'
        required
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <button type='submit' onClick={submitHandler} className='btn-primary'>
      Send
    </button>
  </form>
</>
  )
}
