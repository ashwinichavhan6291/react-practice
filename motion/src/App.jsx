import { motion } from "motion/react"
// import './App.css'

function App() {
 

  return (
    <>
   
     <div className="w-screen" >
      
     
      <motion.div  
      className='w-32 h-32 mt-10 bg-gray-300' 
      drag
      whileDrag={{scale:0.8}}
      dragConstraints={{
        left:0,
        top:0,
        right:1000,
        bottom:500
      }}
      dragDirectionLock="true"
  whileHover={{background:"gray"}}
  whileTap={{scale:0.7}}

 >
       
      </motion.div>
     </div>
    </>
  )
}

export default App
