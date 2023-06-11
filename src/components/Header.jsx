import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contracts/contract'
import React, { useState } from 'react'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { useContractRead,useAccount } from 'wagmi'
function Header() {
    const [patientStatus, setPatientStatus] = useState()
    const { address, isConnecting, isDisconnected } = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'patients',
        args:[address]
      })
      const { data:dataPatients} = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'getHealthStatus',
        args:[address]
      })
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'reportHealthStatus',
        args:[patientStatus]
      })
      const { write } = useContractWrite(config)
      console.log(data);
     
      
      
  return (
    <div className='mt-32 p-4 space-y-10 h-4/5' >
        <div className=' flex flex-col lg:flex-row items-center justify-evenly '>
        <div className='border border-black w-fit p-4 rounded-xl shadow-xl'>
            <p> 0 for Unknown</p>
            <p> 1 for Healthy</p>
            <p> 2 for Infected</p>
            <p> 3 for Recovered</p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-2'>
           <p className='text-2xl'>
             Enter Status
            </p>
            <input type="text" placeholder='enter the status' onChange={(e)=>setPatientStatus(e.target.value)} className='bg-transparent outline-none'/>
            <button disabled={!write} onClick={() => write?.()} className='bg-black px-1 py-2 rounded-xl text-white w-fit'>Click</button>
        </div>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <p>Your current Detail</p>
            <div>
            {
          data &&
          <div>
          {(dataPatients)}
          </div>
        }
            </div>
        </div>
     
 
    </div>
  )
}

export default Header