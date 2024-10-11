import React, { useState } from 'react'
import CheckOtpForm from '../components/template/CheckOtpForm'
import SendOtpForm from '../components/template/sendOtpForm'

const AuthPage = () => {
  const [step, setStep] = useState(1)
  const [mobile, setMobile] = useState("")
  const [code, setCode] = useState("")
  return (
    <div>
      {step === 1 && <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />}
      {step === 2 && <CheckOtpForm code={code} setCode={setCode} mobile={mobile} setStep={setStep} />}
    </div>
  )
}

export default AuthPage
