import { motion } from 'framer-motion'

interface StaggeredTextProps{
    title: string
}

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeInOut", 
        type: "tween"
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

export const StaggeredText = ({title}: StaggeredTextProps) => {
    const list = title.split('');
    console.log(list)
    // const list = title.split("");
    return (
        <motion.ol
            className='list-none flex mx-auto justify-center'
            variants={container}
            transition = {{ease: "easeInOut", duration: 0.55, type: "tween"}}
            initial="hidden"
            animate="show"
        >
            
            {list.map((it) => {
                return (<motion.li variants={item} className="text-lg tracking-widest font-extralight uppercase">
                  {it}
                  </motion.li>);
            })}
        </motion.ol>
    )
}