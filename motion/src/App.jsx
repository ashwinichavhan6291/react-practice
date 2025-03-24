import { motion } from "motion/react"
// import './App.css'

function App() {
 

  return (
    <>
   
     <div className="w-screen" >
      
     
      <motion.div  
      className='w-32 h-32 mt-10 bg-gray-300' 
      
      animate={{x:[0,800,800,0,0],
        y:[0,0,300,300,0],
        rotate:[0,360,-360,0]
      
 }} transition={{
  duration:4,
  delay:2,
  
 }}
 >
       
      </motion.div>
     </div>
    </>
  )
}

export default App
