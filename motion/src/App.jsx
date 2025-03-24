import { motion } from "motion/react"
// import './App.css'

function App() {
 

  return (
    <>
   
     <div className="w-screen" >
      
     
      <motion.div  
      className='w-32 h-32 mt-10 bg-gray-300' 
      
  whileHover={{background:"gray"}}
  whileTap={{scale:0.7}}
whileInView={{background:"red"}}
 >
       
      </motion.div>
     </div>
    </>
  )
}

export default App
